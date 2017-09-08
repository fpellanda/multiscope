import { MongoObservable } from 'meteor-rxjs';
import { Feed, Sign, Horoscope } from '../models';
import { Signs, Feeds } from '.'
export const Horoscopes = new MongoObservable.Collection<Horoscope>('horoscopes');
import * as parser from 'rss-parser';
import { Meteor } from 'meteor/meteor';
import * as moment from 'moment';

interface FeedEntry {
  title: string;
  link: string;
  pubDate: Date;
  content: string;
  contentSnippet: string;
  isoDate: Date; // ":"2017-09-08T07:00:00.000Z"
}

function createHoroscopes(feed: Feed, err, parsed) {
  let signs = Signs.find({}).fetch();
  console.error(err)
  console.log(JSON.stringify(parsed))
  parsed.feed.entries.forEach(function(entry) {
    entry.isoDate = new Date(entry.isodate);
    entry.pubDate = new Date(entry.pubDate);
    let feedEntry: FeedEntry = entry;
    signs.forEach((sign: Sign) => {
      console.log(feedEntry.title)
      console.log(sign.name[feed.language])
      if (feedEntry.title.match(sign.name[feed.language].slice(0,5))) {
        Horoscopes.remove({ signId: sign._id, feedId: feed._id })
        Horoscopes.insert({
          signId: sign._id,
          feedId: feed._id,
          text: feedEntry.content,
          publicationDate: feedEntry.isoDate
        })
      }
    })
  })
}
function fetchHoroscopes(feed: Feed) {
  Horoscopes.remove({ feedId: feed._id, publicationDate: { "$lt": moment().subtract(1, 'day') }})
  //Horoscopes.remove({ feedId: feed._id })
  if (Horoscopes.collection.find({ feedId: feed._id}).count() > 0)
    return;
  parser.parseURL(feed.url, Meteor.bindEnvironment((err, parsed) => {
    createHoroscopes(feed, err, parsed);
  }))

}

if (Meteor.isServer) {
console.log('pub')
    Meteor.publish("horoscopesForSign", (signId) => {
      console.log(signId)
      let feeds = Feeds.find({ language: "de" }).fetch();
      feeds.forEach(fetchHoroscopes)
      return Horoscopes.find({ signId: signId });
    })
}