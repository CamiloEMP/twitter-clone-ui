import { InputSearch } from './InputSearch'
import { WhatsHappening } from './WhatsHappening'
import { WhoFollow } from './WhoFollow'
import style from './index.module.css'

export const Notices = () => {
  return (
    <section className={style.containerNotices}>
      <InputSearch />
      <WhatsHappening />
      <WhoFollow />
    </section>
  )
}
