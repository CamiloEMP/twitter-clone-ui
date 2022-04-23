import tweets from '../../data/index.json' // Simulate deta of twitter

import style from './index.module.css'
import { CardTweet } from './CardTweet'

export const Tweets = () => {
  return (
    <section>
      {tweets.map(tweet => (
        <article
          key={tweet.username}
          className={style.Tweet}
          style={{ borderBottom: '1px solid #2f3336' }}
        >
          <CardTweet {...tweet} />
        </article>
      ))}
    </section>
  )
}
