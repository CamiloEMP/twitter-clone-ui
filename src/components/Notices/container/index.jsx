import style from './index.module.css'

const index = ({ children }) => {
  return (
    <section className={`${style.container}`}>
      {children}
      <a className={style.showMore} href="#">
        Show more
      </a>
    </section>
  )
}

export default index
