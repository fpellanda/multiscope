import {} from 'jasmine';
import { FeedFetcher } from './feed_fetcher'
import { Feed } from '../server/models';

describe("FeedFetcher", () => {
  let subject;

  beforeEach(() => {
    subject = new FeedFetcher({
      name: 'German Feed',
      language: 'de',
      url: 'example.com/feed'
    })
  })

  it('does not fetch feeds if there are up to date horoscopes', () => {
    subject.fetch()
    console.log('yes')
  })

})