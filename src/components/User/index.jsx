import { useState } from 'react'

import style from './index.module.css'

export const User = () => {
  const [show, setShow] = useState(false)
  const imgProfile =
    'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'

  return (
    <section className={style.absolute}>
      <section className={style.User} onClick={() => setShow(prevState => !prevState)}>
        <div>
          <img alt="user normal" src={imgProfile} />
          <div>
            <p>Camilo Mora</p>
            <p>@b7c8pCM</p>
          </div>
        </div>
        <div>
          <svg
            aria-hidden="true"
            className="r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <g>
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </g>
          </svg>
        </div>
      </section>
      {show && (
        <section className={style.MoreInfo}>
          <div>
            <div className={style.UserInfo}>
              <img alt="user normal" src={imgProfile} />
              <div>
                <p>Camilo Mora</p>
                <p>@b7c8pCM</p>
              </div>
            </div>
            <svg
              aria-hidden="true"
              className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-19u6a5r r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              fill="#1d9bf0"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z" />
              </g>
            </svg>
          </div>
          <div className={style.UserState}>
            <p>Add an existing account</p>
            <p>Log out @b7c8pCM</p>
          </div>
          <div className={style.arrowDown} />
        </section>
      )}
    </section>
  )
}
