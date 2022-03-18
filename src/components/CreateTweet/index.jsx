import { useState } from 'react/cjs/react.development'

import * as Icon from '../Icons/TweetIcons'

import style from './index.module.css'
export const CreateTweet = () => {
  const [tweetActivate, setTweetActivate] = useState(false)

  return (
    <section className={style.containerTweet}>
      <div className={style.tweetContainer}>
        <div>
          <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" />
        </div>
        <div className={style.wrapper}>
          <textarea
            placeholder="What`s happening?"
            type="text"
            onFocus={() => setTweetActivate(true)}
          />
          <div className={style.bottomLine}>
            {tweetActivate && (
              <div className={style.tweetPeople}>
                <Icon.World />
                <span>Everyone can reply</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.actionsTweet}>
        <div>
          <Icon.Image />
          <Icon.Gif />
          <Icon.Poll />
          <Icon.Emoji />
          <Icon.Calendar />
          <Icon.Location />
        </div>
        <div>
          <button>Tweet</button>
        </div>
      </div>
    </section>
  )
}
