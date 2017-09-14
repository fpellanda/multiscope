import * as parser from 'rss-parser';
import * as moment from 'moment';
import { Horoscope, Feed, Sign } from '../server/models';
import { Horoscopes, Feeds, Signs } from '../server/collections';

interface FeedEntry {
  title: string;
  link: string;
  pubDate: Date;
  content: string;
  contentSnippet: string;
  isoDate: Date; // ":"2017-09-08T07:00:00.000Z"
}

export class FeedFetcher {
  static fetch(feed: Feed) {
    Horoscopes.remove({ feedId: feed._id, publicationDate: { "$lt": moment().subtract(1, 'day') }})
    // Horoscopes.remove({ feedId: feed._id })
    if (Horoscopes.collection.find({ feedId: feed._id}).count() > 0)
      return;

    (new FeedFetcher(feed)).fetch();
  }

  feed: Feed;

  constructor(feed: Feed) {
    this.feed = feed;
  }

  fetch() {
    parser.parseURL(this.feed.url, Meteor.bindEnvironment((err, parsed) => {
      this.createHoroscopes(err, parsed);
    }))
  }

  createHoroscopes(err, parsed) {
    console.log("Create horoscopes from feed: " + this.feed.url)
    let signs = Signs.find({}).fetch();
    if (err) {
       console.error("Fetch " + this.feed.url + " error: " + err);
       return;
    }
    let entries = <any[]>parsed.feed.entries;
    if (entries.length != 12) {
       console.error("Fetch " + this.feed.url + " did not return 12 entries: " + entries.length);
       return;
    }

    let unprocessedEntries = <any[]>entries.slice(0);
    entries.forEach((entry, index) => {
      entry.isoDate = new Date(entry.isodate);
      entry.pubDate = new Date(entry.pubDate);
      let feedEntry: FeedEntry = entry;
      signs.forEach((sign: Sign) => {
        if (feedEntry.title.match(sign.name[this.feed.language].slice(0,5))) {
          Horoscopes.remove({ signId: sign._id, feedId: this.feed._id })
          Horoscopes.insert({
            signId: sign._id,
            feedId: this.feed._id,
            text: feedEntry.content,
            publicationDate: feedEntry.isoDate
          })
          unprocessedEntries.splice(unprocessedEntries.indexOf(entry), 1);
        }
      })
    })

    unprocessedEntries.forEach((entry) => {
      console.warn("Entry from " + this.feed.url + " not processed: " + entry.title)
    })
  }
}