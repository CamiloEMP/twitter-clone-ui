import tweets from '../../data/index.json' // Simulate deta of twitter

import { CardTweet } from './CardTweet'

export const Tweets = () => {
  return (
    <section>
      {tweets.map(tweet => (
        <article key={tweet.username}>
          <CardTweet {...tweet} />
        </article>
      ))}
    </section>
  )
}
