import { TopTweets } from '../Icons'

import style from './index.module.css'

export const TitleSection = () => {
  return (
    <section className={style.titleSection}>
      <h2 className={style.textSection}>Home</h2>
      <TopTweets />
    </section>
  )
}
