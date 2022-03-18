import { TitleSection } from '../TitleSection'
import { CreateTweet } from '../CreateTweet'
import { Tweets } from '../Tweets'

import style from './index.module.css'

export const MainContent = () => {
  return (
    <section className={style.containerContent}>
      <TitleSection />
      <CreateTweet />
      <Tweets />
    </section>
  )
}
