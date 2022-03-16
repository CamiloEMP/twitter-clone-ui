import style from './ItemNavigation.module.css'

export const ItemNavigation = ({ icon, children }) => {
  const boldText = children === 'Home' ? 'bold' : null

  return (
    <li className={style.item}>
      <span className={style.icon}>{icon}</span>
      <span className={style.text} style={{ fontWeight: boldText }}>
        {children}
      </span>
    </li>
  )
}
