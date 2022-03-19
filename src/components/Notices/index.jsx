import { InputSearch } from './InputSearch'
import style from './index.module.css'
import { WhatsHappening } from './WhatsHappening'

export const Notices = () => {
  return (
    <section className={style.containerNotices}>
      <InputSearch />
      <WhatsHappening />
    </section>
  )
}
