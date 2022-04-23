import * as Icon from '../Icons'
import { User } from '../User'

import style from './NavBar.module.css'
import { ItemNavigation } from './ItemNavigation'

export const NavBar = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.twitterIcon}>
          <Icon.Twitter width={32} />
        </div>
        <ul className={style.navbar}>
          <ItemNavigation icon={<Icon.Home />}>Home</ItemNavigation>
          <ItemNavigation icon={<Icon.Hashtag />}>Explore</ItemNavigation>
          <ItemNavigation icon={<Icon.Notification />}>Notifications</ItemNavigation>
          <ItemNavigation icon={<Icon.Message />}>Messages</ItemNavigation>
          <ItemNavigation icon={<Icon.Bookmarks />}>Bookmarks</ItemNavigation>
          <ItemNavigation icon={<Icon.List />}>Lists</ItemNavigation>
          <ItemNavigation icon={<Icon.Profile />}>Profile</ItemNavigation>
          <ItemNavigation icon={<Icon.More />}>More</ItemNavigation>
        </ul>
        <div className={style.tweet}>
          <p className={style.tweetText}>Tweet</p>
          <Icon.Tweet className={style.tweetIcon} />
        </div>
      </nav>
      <User />
    </header>
  )
}
