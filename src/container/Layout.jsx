import style from './index.module.css'

export const Layout = ({ children }) => {
  return <main className={style.wrapper}>{children}</main>
}
