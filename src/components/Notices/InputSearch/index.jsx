import { useState } from 'react'

import style from './index.module.css'

const IconSearch = props => (
  <svg
    aria-hidden="true"
    className="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m21.53 20.47-3.66-3.66A8.98 8.98 0 0 0 20 11a9 9 0 1 0-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 0 0 1.06 0 .747.747 0 0 0 .002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
  </svg>
)

export const InputSearch = () => {
  const [focus, setFocus] = useState(false)

  return (
    <div className={focus ? `${style.InputContainer} ${style.active}` : `${style.InputContainer}`}>
      <IconSearch className={focus ? style.iconActive : null} />
      <input
        placeholder="Search Twitter"
        type="text"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
    </div>
  )
}
