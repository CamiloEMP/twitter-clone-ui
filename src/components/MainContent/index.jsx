import { TitleSection } from '../TitleSection'
import { Tweet } from '../Tweet'

import style from './index.module.css'

export const MainContent = () => {
  return (
    <section className={style.containerContent}>
      <TitleSection />
      <Tweet />
    </section>
  )
}
