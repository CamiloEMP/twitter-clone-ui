import * as Icon from './Icons/TweetIcons'

export const Tweet = () => {
  return (
    <section>
      <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" />
      <input placeholder="What`s happening?" type="text" />
      <div>Icon Every can reply</div>
      <div>
        <Icon.Image />
        <Icon.Gif />
        <Icon.Poll />
        <Icon.Emoji />
        <Icon.Calendar />
        <Icon.Location />
      </div>
      <button>Tweet</button>
    </section>
  )
}
