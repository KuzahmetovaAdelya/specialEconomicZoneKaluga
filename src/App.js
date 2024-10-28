import './index.css';
import { useState } from 'react';
import logo from "./Union.svg"
import map from "./map.png"
import arrow from "./arrow.svg"
import res1 from "./res1.png"
import res2 from "./res2.png"
import res3 from "./res3.png"
import res4 from "./res4.png"
import res5 from "./res5.png"
import res7 from "./res7.png"
import res8 from "./res8.png"
import res10 from "./res10.png"
import res11 from "./res11.png"
import gal1 from "./gal1.png"
import gal2 from "./news2.png"
import gal3 from "./gal2.png"
import gal4 from "./news1.png"
import gal5 from "./gal3.png"
import gal6 from "./news3.png"
import gal7 from "./gal4.png"

export default function App() {
  const [page, setPage] = useState(1)

  return (
    <>
      {page === 1 && <MainPage page={page} setPage={setPage} />}
      
    </>
  )
}

function MainPage({page, setPage}) {
  return (
    <>
      <SideBar page={page} setPage={setPage} />
      <div className='container'>
        <MapBlock />
        <InfoCardsBlock setPage={setPage} />
        <Lgots />
      </div>
      <NewsBlock setPage={setPage} />
      <div className='container'>
        <Residents />
        <GalleryBlock />
      </div>
    </>
  )
}

function SideBar({page, setPage}) {
  return (
    <>
      <aside>
        <div className='logo-block'>
          <img src={logo} className='logo' alt='logo'></img>
          <div className='logo-text-block'>
            <p className='title'>ОСОБАЯ ЭКОНОМИЧЕСКАЯ ЗОНА</p>
            <p className='subtitle'>Калужской области</p>
          </div>
        </div>

        <div className='aside-list'>
          <p>Преимущества</p>
          <p>Площадки</p>
          <p>Новости</p>
          <p>Галерея</p>
          <p>Контакты</p>
        </div>

        <div className='aside-button-block'>
          <button className='aside-button'>Стать резидентом</button>
        </div>
      </aside>
    </>
  )
}

function MapBlock() {
  return (
    <>
      <div className='map-block mb'>
        <img src={map} className='map-img' alt='map'></img>
        <div className='map-text-block'>
          <h1>ОСОБАЯ ЭКОНОМИЧЕСКАЯ ЗОНА КАЛУГА</h1>
          <p>ВХОДИМ В <b>ТОП-10</b> ИНВЕСТИЦИОННО-ПРИВЛЕКАТЕЛЬНЫХ ОЭЗ РОССИИ</p>
        </div>
      </div>
    </>
  )
}

function InfoCardsBlock({setPage}) {
  const infoCardInformation = [
    {
      title: "2",
      text: "ПЛОЩАДКИ",
      img: 1
    },
    {
      title: "979",
      text: "ГА, ПЛОЩАДЬ",
      img: 2
    },
    {
      title: "18",
      text: "РЕЗИДЕНТОВ",
      img: 3
    }
  ]

  return (
    <>
      <div className='info-cards-line mb'>
        <InfoCard list={infoCardInformation[0]} />
        <InfoCard list={infoCardInformation[1]} />
        <InfoCard list={infoCardInformation[2]} />
      </div>
    </>
  )
}

function InfoCard({list}) {
  let cardStyle = "info-card"
  if (list.img === 1) {
    cardStyle = "info-card info-img1"
  } else if (list.img === 2) {
    cardStyle = "info-card info-img2"
  } else if (list.img === 3) {
    cardStyle = "info-card info-img3"
  }

  return (
    <>
      <div className={cardStyle}>
        <div className='info-card-text-block'>
          <h2>{list.title}</h2>
          <p className='small'>{list.text}</p>
        </div>
        <img src={arrow} className='info-card-arrow'></img>
      </div>
    </>
  )
}

function Lgots() {
  return (
    <>
      <div className='lgots-block'>
        <h3>ЛЬГОТЫ И ПРЕФЕРЕНЦИИ</h3>
        <div className='lgots-text-block'>
          <div className='lgots-text-col'>
            <p className='lgots-text'>Земельный налог в течение <u>5 лет</u></p>
            <p className='lgots-text'>Налог на имущество в течение <u>10 лет</u></p>
            <p className='lgots-text'>Транспортный налог</p>
          </div>
          <div className='lgots-text-col'>
            <p className='except'>Таможенные пошлины</p>
            <p className='except'>Транспортный налог для отдельных видов деятельности на <u>5 лет</u></p>
            <p className='lgots-text'>Налог на добавочную стоимость <u>(НДС)</u></p>
          </div>
        </div>
      </div>
    </>
  )
}

function NewsBlock({setPage}) {
  const news = [
    {
      date: "12.03.21",
      title: "Какая-то определённая новость на две строки заголовка",
      text: "Какая-то определённая новость какая-то определённая новость с двумя строками с двумя строками Какая-то определённая новость...",
      img: 1
    },
    {
      date: "12.03.21",
      title: "Какая-то определённая новость на две строки заголовка",
      text: "Какая-то определённая новость какая-то определённая новость с двумя строками с двумя строками Какая-то определённая новость...",
      img: 2
    },
    {
      date: "12.03.21",
      title: "Какая-то определённая новость на две строки заголовка",
      text: "Какая-то определённая новость какая-то определённая новость с двумя строками с двумя строками Какая-то определённая новость...",
      img: 3
    }
  ]


  return (
    <>
      <div className='gray-container'>
        <div className='container'>
          <div className='news-block'>
            <div className='news-title-line'>
              <h3>НОВОСТИ</h3>
              <div className='news-title-line-link'>
                <p className='small'>Все новости</p>
                <img src={arrow} className='news-title-line-link-arrow' alt='arrow'></img>
              </div>
            </div>

            <div className='news-cards-line'>
              <NewsCard list={news[0]} />
              <NewsCard list={news[1]} />
              <NewsCard list={news[2]} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function NewsCard({list}) {
  let cardImg = "news-img"
  if (list.img === 1) {
    cardImg = "news-img news-img1"
  } else if (list.img === 2) {
    cardImg = "news-img news-img2"
  } else if (list.img === 3) {
    cardImg = "news-img news-img3"
  }

  return (
    <>
      <div className="news-card">
        <div className={cardImg}></div>
        <div className='news-card-text-block'>
          <p className='small gray'>{list.date}</p>
          <h4>{list.title}</h4>
          <p className='gray'>{list.text}</p>
        </div>
      </div>
    </>
  )
}

function Residents() {
  return (
    <>
      <div className='residents mb'>
        <h3>РЕЗИДЕНТЫ</h3>
        <div className='residents-block'>
          <div className='residents-col'>
            <img src={res1} className='resident-img' alt='resident'></img>
            <img src={res2} className='resident-img' alt='resident'></img>
            <img src={res3} className='resident-img' alt='resident'></img>
          </div>
          <div className='residents-col'>
            <img src={res4} className='resident-img' alt='resident'></img>
            <img src={res5} className='resident-img' alt='resident'></img>
            <img src={res1} className='resident-img' alt='resident'></img>
          </div>
          <div className='residents-col'>
            <img src={res7} className='resident-img' alt='resident'></img>
            <img src={res8} className='resident-img' alt='resident'></img>
            <img src={res5} className='resident-img' alt='resident'></img>
          </div>
          <div className='residents-col'>
            <img src={res10} className='resident-img' alt='resident'></img>
            <img src={res11} className='resident-img' alt='resident'></img>
          </div>
        </div>
      </div>
    </>
  )
}

function GalleryBlock() {
  return (
    <>
      <div className='gallery-block mb'>
        <h3>ФОТОГАЛЕРЕЯ</h3>
        <div className='gallery-img-big-block'>

          <div className='gallery-line'>
            <img src={gal1} className='gallery-img-big' alt='Photo'></img>
            <div className='gallery-col'>
              <img src={gal2} className='gallery-img-small' alt='Photo'></img>
              <img src={gal3} className='gallery-img-small' alt='Photo'></img>
            </div>
            <img src={gal4} className='gallery-img-big' alt='Photo'></img>
          </div>

          <div className='gallery-line'>
            <img src={gal5} className='gallery-img-wide' alt='Photo'></img>
            <div className='gallery-col'>
              <img src={gal6} className='gallery-img-small' alt='Photo'></img>
              <img src={gal7} className='gallery-img-small' alt='Photo'></img>
            </div>
          </div>
        </div>
        <div className='gallery-text-block'>
          <p>Команда Калужской области – ваш надежный партнер в развитии бизнеса.</p>
          <p>С 2006 года в Калужской области открыто <b>116</b> новых предприятий. Более <b>220</b> проектов со всего мира реализуются на территории региона.</p>
        </div>
      </div>
    </>
  )
}