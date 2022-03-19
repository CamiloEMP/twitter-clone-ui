import style from './index.module.css'

export const WhatsHappening = () => {
  return (
    <section className={style.container}>
      <h3>What’s happening</h3>
      <a href="#">
        <div>
          <span>Premier League · 1 hour ago</span>
          <span>Wolves vs Leeds United</span>
          <span>
            Trending with <span>Leeds</span>
          </span>
        </div>
        <div>
          <img
            alt=""
            src="https://pbs.twimg.com/semantic_core_img/1425858282728476678/VLAl7VtC?format=jpg&name=small"
          />
        </div>
      </a>
      <a href="#">
        <div>sad</div>
      </a>
      <a href="#">
        <div>sad</div>
      </a>
      <a href="#">
        <div>sad</div>
      </a>
      <a href="#">
        <div>sad</div>
      </a>
      <a href="#">
        <div>sad</div>
      </a>
    </section>
  )
}
