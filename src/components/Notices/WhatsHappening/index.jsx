import Container from '../container/index'

import style from './index.module.css'
// Esta hardcodeado si proviniera de una api, haria el mismo procedimiento que utilize en los tweets.
// Pero cada vez que entraba a twitter veia información diferente.

export const WhatsHappening = () => {
  return (
    <Container>
      <div className={style.WhatsHappening}>
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
          <div>
            <span>Trending in Colombia</span>
            <span>Polo Polo</span>
            <span>150K Tweets</span>
          </div>
          <span>···</span>
        </a>
        <a href="#">
          <div>
            <span>Trending in Colombia</span>
            <span>#LLoradonUribista</span>
          </div>
          <span>···</span>
        </a>
        <a href="#">
          <div>
            <span />
            <span>#PlatziDay</span>
            <span style={{ fontSize: '16px' }}>
              +1000 cursos en tecnología SIN COSTO por 72 horas. ¡Empieza ya!
            </span>
            <span style={{ color: '#696969', fontSize: '12px' }}>Promoted by Platzi</span>
          </div>
        </a>
        <a href="#">
          <div>
            <span>Esquire España · Yestarday</span>
            <span>Así han reaccionado las redes a MOTOMAMI</span>
          </div>
          <div>
            <img alt="" src="https://pbs.twimg.com/media/FOIJM7sWUAMnIdW?format=jpg&name=120x120" />
          </div>
        </a>
      </div>
    </Container>
  )
}
