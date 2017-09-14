import { Meteor } from 'meteor/meteor';
import { Horoscope, Feed } from './models';
import { Horoscopes, Feeds } from './collections';
import { FeedFetcher } from '../imports/feed_fetcher';

Meteor.publishComposite("horoscopesForSign", function(signId: string): PublishCompositeConfig<Horoscope>  {
  return {
    find: () => {
      let feeds = Feeds.find({ language: "de" }).fetch();
      feeds.forEach(FeedFetcher.fetch)
       return Horoscopes.collection.find({ signId: signId });
    },
    children: [
      <PublishCompositeConfig1<Horoscope, Feed>> {
        find: (horoscope) => {
          return Feeds.collection.find({ _id: horoscope.feedId }, { sort: { createdAt: -1 }, limit: 1 });
        }
      }
    ]
  }
})