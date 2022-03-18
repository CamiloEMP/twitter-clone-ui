import style from './index.module.css'
import * as Icon from './icons'

export const CardTweet = ({ img, author, username, hour, content, likes, retweet, comments }) => {
  return (
    <a className={style.CardTweet} href="#">
      <div>
        <img alt={`${username} tweet`} src={img} />
      </div>
      <div className={style.tweetContent}>
        <div>
          <span>{author}</span>
          <span>{username}</span>
          <span>·</span>
          <span>{hour}</span>
        </div>
        <p className={style.contentTweet}>{content}</p>
        <div className={style.icons}>
          <div className={style.active}>
            <Icon.Reply />
            <span>{likes}</span>
          </div>
          <div className={style.active}>
            <Icon.Retweet />
            <span>{retweet}</span>
          </div>
          <div className={style.active}>
            <Icon.Like />
            <span>{comments}</span>
          </div>
          <div className={style.active}>
            <Icon.Share />
          </div>
        </div>
      </div>
    </a>
  )
}
