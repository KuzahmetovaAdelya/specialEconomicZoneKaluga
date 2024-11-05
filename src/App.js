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
import menu from "./menu.svg"
import circle from "./circle.svg"
import map2 from "./map2.png"
import doc from "./document.svg"
import inst from "./insta.svg"
import facebook from "./facebook.svg"
import vk from "./vk.svg"
import cross from "./cross.svg"
import news from "./list.js"
import galList from "./galList.js"

export default function App() {
  const [page, setPage] = useState("main")
  const [isFormActive, setIsFormActive] = useState(false)

  return (
    <>
      {page === "main" && <MainPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />}
      {page === "preferences" && <PreferencesPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />}
      {page === "places" && <PlacesPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />}
      {page === "ludino" && <PloshadkaPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />}
      {page === "borov" && <PloshadkaPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />}
      {page === "contacts" && <ContactsPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />} 
      {page === "grounds" && <FreePlacesPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />} 
      {page === "news" && <NewsPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />} 
      {page === "gallery" && <GalleryPage page={page} setPage={setPage} setIsFormActive={setIsFormActive} />} 
      {isFormActive && <ResidentForm setIsFormActive={setIsFormActive} />}
    </>
  )
}

function SideBar({page, setPage, setIsFormActive}) {
  return (
    <>
      <aside>
        <div className='logo-block' onClick={() => {setPage("main")}}>
          <img src={logo} className='logo' alt='logo'></img>
          <div className='logo-text-block'>
            <p className='title'>ОСОБАЯ ЭКОНОМИЧЕСКАЯ ЗОНА</p>
            <p className='subtitle'>Калужской области</p>
          </div>
        </div>

        <div className='aside-list'>
          {page === "preferences" ? 
          <p className='yellow' onClick={() => {setPage("preferences")}}>Преимущества</p> :
          <p onClick={() => {setPage("preferences")}}>Преимущества</p>}

          {page === "places" || page === "ludino" || page === "borov" ? 
          <p className='yellow' onClick={() => {setPage("places")}}>Площадки</p> :
          <p onClick={() => {setPage("places")}}>Площадки</p>}
          
          {page === "news" || page === "grounds" ? 
          <p className='yellow' onClick={() => {setPage("news")}}>Новости</p> :
          <p onClick={() => {setPage("news")}}>Новости</p>}
          
          {page === "gallery" ? 
          <p className='yellow' onClick={() => {setPage("gallery")}}>Галерея</p> :
          <p onClick={() => {setPage("gallery")}}>Галерея</p>}
          
          {page === "contacts" ? 
          <p className='yellow' onClick={() => {setPage("contacts")}}>Контакты</p> :
          <p onClick={() => {setPage("contacts")}}>Контакты</p>}
        </div>

        <div className='aside-button-block'>
          <button className='aside-button' onClick={() => {setIsFormActive(true)}}>Стать резидентом</button>
        </div>
      </aside>
    </>
  )
}

function Footer({setPage}) {
  const footerList = [
    {
      title: "Общая информация",
      elements: [
        "Земельные участки",
        "Инфраструктура",
        "График реализации проектов"
      ]
    },
    {
      title: "Площадка Боровск",
      elements: [
        "Общая информация",
        "Земельные участки",
        "Инфраструктура",
        "График реализации проектов"
      ]
    },
    {
      title: "Что такое ОЭЗ",
      elements: [
        "Общая информация",
        "История создания",
        "Налоговые льготы",
        "Таможенные преференции",
        "Логистика",
        "Резиденты"
      ]
    },
    {
      title: " ",
      elements: [
        "Нормативные документы и бланки",
        "Раскрытие информации",
        "Закупки",
        "Контакты",
        "Услуги",
        "Свободные земельные участки"
      ]
    }
  ];

  return (
    <>
      <footer>
        <div className='container'>
          <div className='footer-list-block'>
            <FooterList list={footerList[0]} setPage={setPage} />
            <FooterList list={footerList[1]} setPage={setPage} />
            <FooterList list={footerList[2]} setPage={setPage} />
            <FooterList list={footerList[3]} setPage={setPage} />
          </div>

          <div className='footer-list-block bottom'>
            <div className='footer-text-block small-block'>
              <p className='white'><b>+7 (4842) 70-50-50</b></p>
              <p className='white light'>Боровский район, c. Ворсино, Северная промышленная зона, владение 9</p>
              <p className='white light'>office@oez.kaluga.ru</p>
            </div>

            <div className='footer-text-block'>
              <button className='footer-button'><img src={menu} className='footer-button-icon' alt="menu"></img><p className='small white'><u>СМОТРЕТЬ СВОБОДНЫЕ УЧАСТКИ</u></p></button>
            </div>

            <div className='footer-text-block'>
              <p className='small white underlined'>Политика конфиденциальности</p>
              <p className='white small'>Сайт разработан в <u>The Red Button</u></p>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

function FooterList({list, setPage}) {
  let footerList = []
  for (let i = 0; i < list.elements.length; i++) {
    if (list.elements[i] === "Свободные земельные участки") {
      footerList.push(<p className='small light white' onClick={() => {setPage("grounds")}}>{list.elements[i]}</p>)
    } else {
      footerList.push(<p className='small light white'>{list.elements[i]}</p>)
    }
  }

  return (
    <>
      <div className='footer-list'>
        <p className='yellow'><b>{list.title}</b></p>
        <div className='footer-list-elements'>
          {footerList}
        </div>
      </div>
    </>
  )
}

function PageTitle({page, setPage}) {
  return (
    <>
      <div className='page-title-text-block'>
        {page === "preferences" && <p><u onClick={() => {setPage("main")}}>Главная / </u>Преимущества</p>}
        {page === "places" && <p><u onClick={() => {setPage("main")}}>Главная / </u>Площадки</p>}
        {page === "ludino" && <p><u onClick={() => {setPage("main")}}>Главная / </u><u onClick={() => {setPage("places")}}>Площадки /</u> Людиновская площадка</p>}
        {page === "borov" && <p><u onClick={() => {setPage("main")}}>Главная / </u><u onClick={() => {setPage("places")}}>Площадки /</u> Боровская площадка</p>}
        {page === "contacts" && <p><u onClick={() => {setPage("main")}}>Главная / </u>Контакты</p>}
        {page === "grounds" && <p><u onClick={() => {setPage("main")}}>Главная / </u>Свободные участки</p>}
        {page === "news" && <p><u onClick={() => {setPage("main")}}>Главная / </u>Новости</p>}
        {page === "gallery" && <p><u onClick={() => {setPage("main")}}>Главная / </u>Галерея</p>}
      </div>
    </>
  )
}

function PageTextBlock({info}) {
  return (
    <>
      <div className='page-text-block mb'>
        {info.type ? <h1>{info.title}</h1> : <h3>{info.title}</h3>}
        <div>
          <p>{info.textOne}</p>
          <br />
          <p>{info.textTwo}</p>
        </div>
        
      </div>
    </>
  )
}


function MainPage({page, setPage, setIsFormActive}) {
  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
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
      <Footer setPage={setPage} />
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
        <InfoCard list={infoCardInformation[0]} setPage={setPage}/>
        <InfoCard list={infoCardInformation[1]} setPage={setPage} />
        <InfoCard list={infoCardInformation[2]} setPage={setPage} />
      </div>
    </>
  )
}

function InfoCard({list, setPage}) {
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
        {list.text !== "ПЛОЩАДКИ" && <img src={arrow} className='info-card-arrow' alt='arrow'></img>}
        {list.text === "ПЛОЩАДКИ" && <img src={arrow} className='info-card-arrow' alt='arrow' onClick={() => {setPage("places")}}></img>}
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
              <div className='news-title-line-link' onClick={() => {setPage("news")}}>
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
            <img src={gal1} className='gallery-img-big' alt='gal'></img>
            <div className='gallery-col'>
              <img src={gal2} className='gallery-img-small' alt='gal'></img>
              <img src={gal3} className='gallery-img-small' alt='gal'></img>
            </div>
            <img src={gal4} className='gallery-img-big' alt='gal'></img>
          </div>

          <div className='gallery-line'>
            <img src={gal5} className='gallery-img-wide' alt='gal'></img>
            <div className='gallery-col'>
              <img src={gal6} className='gallery-img-small' alt='gal'></img>
              <img src={gal7} className='gallery-img-small' alt='gal'></img>
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


function PreferencesPage({page, setPage, setIsFormActive}) {
  const info = [
    {
      title: "Преимущества",
      textOne: "На территории ОЭЗ действуют все региональные преимущества, касающиеся доступа к инженерной, транспортной и деловой инфраструктуре, а также федеральные налоговые льготы и таможенные преференции.",
      textTwo: "Здесь созданы все условия для развития высокотехнологичных секторов промышленности.",
      bold: true
    },
    {
      title: "ДО 30% СНИЖЕНИЕ ИЗДЕРЖЕК РЕЗИДЕНТА ОЭЗ «КАЛУГА»",
      textOne: "С инвестора, получившего статус резидента особой экономической зоны «Калуга», плата за пользование объектами инженерной инфраструктуры ОЭЗ взимается на льготных условиях.",
      textTwo: "Расположение точек подключения инженерной и транспортной инфраструктуры в непосредственной близости от границы участка.",
      bold: false
    }
  ]

  const places = [
    {
      title: "ЛЮДИНОВСКАЯ ПЛОЩАДКА",
      elements: [
        "юг Калужской области",
        "близость к промышленным центрам региона",
        "преимущества для развития бизнеса в сфере крупного и среднего машиностроения, производства стройматериалов и деревообработки и др."
      ],
      toKaluga: 160,
      toMoscow: 329
    },
    {
      title: "БОРОВСКАЯ ПЛОЩАДКА",
      elements: [
        "север области, на границе с Новой Москвой",
        "рядом – наукоемкие производства, инженерные центры, крупный логистический хаб",
        "преимущества для развития компаний, работающих в сфере фармацевтики, производства медтехники, машиностроении"
      ],
      toKaluga: 95,
      toMoscow: 80
    }
  ]

  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <PageTitle page={page} setPage={setPage} />
        <PageTextBlock info={info[0]} />
        <div className='preferences-card-block mb'>
          <PreferencesCard place={places[0]} setPage={setPage} />
          <PreferencesCard place={places[1]} setPage={setPage} />
        </div>
        <PageTextBlock info={info[1]} />
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

function PreferencesCard({place, setPage}) {
  let list = []
  for (let i = 0; i < place.elements.length; i++) {
    list.push(<div className='preferences-card-list-element' key={i}><img src={circle} className='preferences-card-list-element-img' alt='o'></img><p className='small'>{place.elements[i]}</p></div>)
  }

  return (
    <>
      <div className='preferences-card'>
        <div className='preferences-card-text-block'>
          <h4>{place.title}</h4>
          <div className='preferences-card-list'>
            {list}
          </div>
        </div>

        <div className='preferences-card-bottom-block'>
          <div className='preferences-card-bottom'>
            <h4>{place.toKaluga}</h4>
            <p className='small'>км до Калуги</p>
          </div>

          <div className='preferences-card-bottom'>
            <h4>{place.toMoscow}</h4>
            <p className='small'>км до Москвы</p>
          </div>

          <div className='preferences-card-bottom small-bottom'>
            {place.title === "ЛЮДИНОВСКАЯ ПЛОЩАДКА" && <img src={arrow} className='preferences-card-bottom-img' alt='arrow' onClick={() => {setPage("ludino")}}></img>}
            {place.title === "БОРОВСКАЯ ПЛОЩАДКА" && <img src={arrow} className='preferences-card-bottom-img' alt='arrow' onClick={() => {setPage("borov")}}></img>}
            
          </div>
        </div>
      </div>
    </>
  )
}


function PlacesPage({page, setPage, setIsFormActive}) {
  const places = [
    {
      title: "ЛЮДИНОВСКАЯ ПЛОЩАДКА",
      subtitle: "Площадка на Юге Калужской области с близостью к промышленным центрам региона",
      page: "ludino"
    },
    {
      title: "БОРОВСКАЯ ПЛОЩАДКА",
      subtitle: "Площадка на Юге Калужской области с близостью к промышленным центрам региона",
      page: "borov"
    }
  ]

  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <PageTitle page={page} setPage={setPage} />
        <h1 className='mb'>ПЛОЩАДКИ</h1>
        <div className='preferences-card-block mb'>
          <PlacesCard place={places[0]} setPage={setPage} />
          <PlacesCard place={places[1]} setPage={setPage} />
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

function PlacesCard({place, setPage}) {
  return (
    <>
      <div className='places-card'>
        <div className='places-card-text-block'>
          <h4>{place.title}</h4>
          <p>{place.subtitle}</p>
        </div>
        {place.page === "ludino" && <img src={arrow} alt='arrow' onClick={() => {setPage("ludino")}}></img>}
        {place.page === "borov" && <img src={arrow} alt='arrow' onClick={() => {setPage("borov")}}></img>}
      </div>
    </>
  )
}


function PloshadkaPage({page, setPage, setIsFormActive}) {
  const info = [
    {
      title: "ЛЮДИНОВСКАЯ ПЛОЩАДКА",
      subtitle: "Площадка на Юге Калужской области с близостью к промышленным центрам региона",
      residents: 11,
      ga: 320,
      toMoscow: 320,
      toBryansk: 86,
      toKaluga: 170,
      groundCategory: "Промышленного назначения",
      textOne: "Максимальный размер арендной платы за земельный участок составляет 2% от его кадастровой стоимости в год.",
      textTwo: "Окончательный размер определяется при применении понижающих коэффициентов.",
      textThree: "По состоянию на 2020 год кадастровая стоимость земли на площадке Людиново за 1 кв.м составляет - 157,55 руб. Аренда без понижающего коэффициента равно 3,15 руб. за 1 кв. м в год.",
      textFour: "После регистрации права собственности на объекты недвижимости, построенные инвестором на земельном участке в границах ОЭЗ, возможен его выкуп в соответствии со статьей 35 Земельного кодекса РФ. Стоимость выкупа земельного участка составляет 25% от кадастровой стоимости земельного участка. По состоянию на 2020 год стоимость выкупа 1 кв.м на площадке Людиново составляет 39,39 рублей.",
      lowC: [
        {
          lowCInput: "от 120 миллионов рублей",
          lowerCoef: "0,9"
        },
        {
          lowCInput: "от 240 миллионов рублей",
          lowerCoef: "0,7"
        },
        {
          lowCInput: "от 340 миллионов рублей",
          lowerCoef: "0,5"
        }
      ],
      arenda: [
        {
          arendaInput: "от 120 миллионов рублей",
          arendaPrice: "2,84"
        },
        {
          arendaInput: "от 240 миллионов рублей",
          arendaPrice: "2,2"
        },
        {
          arendaInput: "от 340 миллионов рублей",
          arendaPrice: "1,58"
        }
      ],
      nearCities: [
        "Людиново", 
        "Киров", 
        "Брянск"
      ],
      nearTrainStations: [
        "Людиново 1", 
        "Людиново 2"
      ],
      nearAirports: [
        {
          airportName: "Брянск",
          toAirport: "86 км"
        },
        {
          airportName: "Калуга",
          toAirport: "170 км"
        },
        {
          airportName: "Внуково",
          toAirport: "300 км"
        },
        {
          airportName: "Домодедово",
          toAirport: "310 км"
        },
        {
          airportName: "Шереметьево",
          toAirport: "340 км"
        }
      ],
      nearRoad: [
        {
          roadName: "А-101",
          toRoad: "60 км"
        },
        {
          roadName: "М-3",
          toRoad: "23 км"
        }
      ],
      img: [
        "ludino1",
        "ludino2",
        "ludino3",
        "ludino4",
        "ludino5",
        "ludino6",
        "ludino7",
        "ludino8",
        "ludino9"
      ]
    },
    {
      title: "БОРОВСКАЯ ПЛОЩАДКА",
      subtitle: "Площадка на Юге Калужской области с близостью к промышленным центрам региона",
      residents: 11,
      ga: 320,
      toMoscow: 80,
      toBryansk: 86,
      toKaluga: 95,
      groundCategory: "Промышленного назначения",
      textOne: "Максимальный размер арендной платы за земельный участок составляет 2%  от его кадастровой стоимости в год.",
      textTwo: "Окончательный размер определяется при применении понижающих коэффициентов.",
      textThree: "По состоянию на 2020 год кадастровая стоимость земли на площадке Людиново за 1 кв.м составляет - 157,55 руб. Аренда без понижающего коэффициента равно 3,15 руб. за 1 кв. м в год.",
      textFour: "После регистрации права собственности на объекты недвижимости, построенные инвестором на земельном участке в границах ОЭЗ, возможен его выкуп в соответствии со статьей 35 Земельного кодекса РФ. Стоимость выкупа земельного участка составляет 25% от кадастровой стоимости земельного участка. По состоянию на 2020 год стоимость выкупа 1 кв.м на площадке Людиново составляет 39,39 рублей.",
      lowC: [
        {
          lowCInput: "от 120 миллионов рублей",
          lowerCoef: "0,9"
        },
        {
          lowCInput: "от 240 миллионов рублей",
          lowerCoef: "0,7"
        },
        {
          lowCInput: "от 340 миллионов рублей",
          lowerCoef: "0,5"
        }
      ],
      arenda: [
        {
          arendaInput: "от 120 миллионов рублей",
          arendaPrice: "2,84"
        },
        {
          arendaInput: "от 240 миллионов рублей",
          arendaPrice: "2,2"
        },
        {
          arendaInput: "от 340 миллионов рублей",
          arendaPrice: "1,58"
        }
      ],
      nearCities: [
        "Борово", 
        "Киров", 
        "Брянск"
      ],
      nearTrainStations: [
        "Борово 1", 
        "Борово 2"
      ],
      nearAirports: [
        {
          airportName: "Брянск",
          toAirport: "86 км"
        },
        {
          airportName: "Калуга",
          toAirport: "170 км"
        },
        {
          airportName: "Внуково",
          toAirport: "300 км"
        },
        {
          airportName: "Домодедово",
          toAirport: "310 км"
        },
        {
          airportName: "Шереметьево",
          toAirport: "340 км"
        }
      ],
      nearRoad: [
        {
          roadName: "А-101",
          toRoad: "60 км"
        },
        {
          roadName: "М-3",
          toRoad: "23 км"
        }
      ],
      img: [
        "borov1",
        "borov2",
        "borov3",
        "borov4",
        "borov5",
        "borov6",
        "borov7",
        "borov8",
        "borov9"
      ]
    }
  ]

  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <PageTitle page={page} setPage={setPage} />
        
        {page === "ludino" && <PloshadkaInfo info={info[0]} page={page} />}
        {page === "borov" && <PloshadkaInfo info={info[1]} page={page} />}
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

function PloshadkaInfo({info, page}) {
  const nearCities = info.nearCities.join(", ")
  const nearTrainStations = info.nearTrainStations.join(", ")
  let nearAirportsListOne = []
  let nearAirportsListTwo = []
  let nearAirportsListThree = []
  for (let i = 0; i < info.nearAirports.length; i++) {
    if (i <= 1) {
      nearAirportsListOne.push(<p className='small'><u>{info.nearAirports[i].airportName} </u></p>)
      nearAirportsListOne.push(<p className='small gray'><u>{info.nearAirports[i].toAirport}, </u></p>)
    } else if (i >= 2 && i <= 3) {
      nearAirportsListTwo.push(<p className='small'><u>{info.nearAirports[i].airportName} </u></p>)
      nearAirportsListTwo.push(<p className='small gray'><u>{info.nearAirports[i].toAirport}, </u></p>)
    } else {
      nearAirportsListThree.push(<p className='small'><u>{info.nearAirports[i].airportName} </u></p>)
      nearAirportsListThree.push(<p className='small gray'><u>{info.nearAirports[i].toAirport}, </u></p>)
    }
  }

  let nearRoadsListOne = []
  let nearRoadsListTwo = []
  let nearRoadsListThree = []
  for (let i = 0; i < info.nearRoad.length; i++) {
    if (i <= 1) {
      nearRoadsListOne.push(<p className='small'><u>{info.nearRoad[i].roadName} </u></p>)
      nearRoadsListOne.push(<p className='small gray'><u>{info.nearRoad[i].toRoad}, </u></p>)
    } else if (i >= 2 && i <= 3) {
      nearRoadsListTwo.push(<p className='small'><u>{info.nearRoad[i].roadName} </u></p>)
      nearRoadsListTwo.push(<p className='small gray'><u>{info.nearRoad[i].toRoad}, </u></p>)
    } else {
      nearRoadsListThree.push(<p className='small'><u>{info.nearRoad[i].roadName} </u></p>)
      nearRoadsListThree.push(<p className='small gray'><u>{info.nearRoad[i].toRoad}, </u></p>)
    }
  }

  let defaultClass = 'plosh-gallery-img'
  let galleryListOne = []
  let galleryListTwo = []
  for (let i = 0; i < info.img.length; i++) {
    defaultClass = 'plosh-gallery-img ' + info.img[i]
    if (i <= 2) {
      galleryListOne.push(<div className={defaultClass}></div>)
    } else if (i >= 3 && i <= 5) {
      galleryListTwo.push(<div className={defaultClass}></div>)
    }
    defaultClass = 'plosh-gallery-img'
  }

  return (
    <>
      <div className='plosh-first mb'>
        <div className='plosh-first-text-block'>
          <div className='plosh-first-text-block-text'>
            <h3>{info.title}</h3>
            <p className='small'>{info.subtitle}</p>
          </div>
          <button>Стать резидентом этой площадки</button>
        </div>

        <div className='plosh-first-img-block'>
          <img src={map2} className='plosh-first-img' alt='img'></img>
        </div>

        <div className='plosh-first-text-block small-bottom'>
          <div className='plosh-first-text-block-little-text'>
            <h3>{info.residents}</h3>
            <p className='small'>Резидентов</p>
          </div>
          <div className='plosh-first-text-block-little-text'>
            <h3>{info.ga}</h3>
            <p className='small'>Гектар</p>
          </div>
          <div className='plosh-first-text-block-little-text'>
            <h3>{info.toMoscow}</h3>
            <p className='small'>КМ от Москвы</p>
          </div>
        </div>
      </div>

      <div className='plosh-info mb'>
        <div className='plosh-info-left'>
          <div className='plosh-info-text-block'>
            <p>{info.textOne}</p>
            <br />
            <p>{info.textTwo}</p>
          </div>

          <div className='plosh-info-table'>
            <div className='plosh-info-table-title-block'>
              <p className='small gray'>Объем капитальных вложений резидента</p>
              <p className='small gray'>Понижающий коэффициент</p>
            </div>

            <div className='plosh-info-table-text-block'>
              <p><u>{info.lowC[0].lowCInput}</u></p>
              <p><u>{info.lowC[0].lowerCoef}</u></p>
            </div>

            <div className='plosh-info-table-text-block'>
              <p><u>{info.lowC[1].lowCInput}</u></p>
              <p><u>{info.lowC[1].lowerCoef}</u></p>
            </div>

            <div className='plosh-info-table-text-block'>
              <p><u>{info.lowC[2].lowCInput}</u></p>
              <p><u>{info.lowC[2].lowerCoef}</u></p>
            </div>
          </div>

          <div className='plosh-info-text-block'>
            <p>{info.textThree}</p>
          </div>

          <div className='plosh-info-table'>
            <div className='plosh-info-table-title-block'>
              <p className='small gray'>Объем капитальных вложений</p>
              <p className='small gray'>Арендная плата руб. за 1 кв.м в год</p>
            </div>

            <div className='plosh-info-table-text-block'>
              <p><u>{info.arenda[0].arendaInput}</u></p>
              <p><u>{info.arenda[0].arendaPrice}</u></p>
            </div>

            <div className='plosh-info-table-text-block'>
              <p><u>{info.arenda[1].arendaInput}</u></p>
              <p><u>{info.arenda[1].arendaPrice}</u></p>
            </div>

            <div className='plosh-info-table-text-block'>
              <p><u>{info.arenda[2].arendaInput}</u></p>
              <p><u>{info.arenda[2].arendaPrice}</u></p>
            </div>
          </div>

          <div className='plosh-info-text-block'>
            <p>{info.textFour}</p>
          </div>
        </div>

        <div className='plosh-info-right'>
          <div className='plosh-info-card'>
            <div className='plosh-info-table'>

              <div className='plosh-info-table-text-block'>
                <p className='small'>Расположение</p>

                <div className='plosh-info-table-text'>
                  <p className='small'><u>Брянск </u></p>
                  <p className='small gray'><u>{info.toBryansk}, </u></p>
                  <p className='small'><u>Калуга </u></p>
                  <p className='small gray'><u>{info.toKaluga}, </u></p>
                  <p className='small'><u>Москва </u></p>
                  <p className='small gray'><u>{info.toMoscow}</u></p>
                </div>
                
              </div>

              <div className='plosh-info-table-text-block'>
                <p className='small'>Категория земель</p>
                <p className='small'><u>{info.groundCategory}</u></p>
              </div>

              <div className='plosh-info-table-text-block'>
                <p className='small'>Ближайшие поселения</p>
                <p className='small'><u>{nearCities}</u></p>
              </div>

              <div className='plosh-info-table-text-block'>
                <p className='small'>Ближайшие поселения</p>
                <p className='small'><u>{nearTrainStations}</u></p>
              </div>

              <div className='plosh-info-table-text-block'>
                <p className='small'>Ближайшие аэропорты</p>

                <div>
                  <div className='plosh-info-table-text'>
                    {nearAirportsListOne}
                  </div>
                  <div className='plosh-info-table-text'>
                    {nearAirportsListTwo}
                  </div>
                  <div className='plosh-info-table-text'>
                    {nearAirportsListThree}
                  </div>
                </div>
              </div>

              <div className='plosh-info-table-text-block'>
                <p className='small'>Ближайшие федеральные трассы</p>

                <div>
                  <div className='plosh-info-table-text'>
                    {nearRoadsListOne}
                  </div>
                  <div className='plosh-info-table-text'>
                    {nearRoadsListTwo}
                  </div>
                  <div className='plosh-info-table-text'>
                    {nearRoadsListThree}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='plosh-info-card'>
            <div className='plosh-info-card-download'>
              <img src={doc} className='plosh-info-card-download-img' alt='download'></img>
              <div>
                <p><u>Скачать анкету резидента</u></p>
                <p className='small'>.zip, 30,1 кб</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Residents />

      <div className='gallery-block mb'>
        <h3>ФОТОГРАФИИ ПЛОЩАДКИ</h3>
        <div className='gallery-line'>
          {galleryListOne}
        </div>
        <div className='gallery-line'>
          {galleryListTwo}
        </div>
      </div>
    </>
  )
}


function ContactsPage({page, setPage, setIsFormActive}) {
  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <PageTitle page={page} setPage={setPage} />
        <div className='contacts mb'>
          <h1>КОНТАКТЫ</h1>

          <div className='news-title-line-link'>
            <div className='aside-list small-block'>
              <p><u>Адрес</u></p>
              <p>Боровский район, с. Ворсино, Северная промышленная зона, владение 9</p>
            </div>

            <div className='aside-list'>
              <p><u>Телефон</u></p>
              <p>+7 4842 70-50-50</p>
            </div>

            <div className='aside-list'>
              <p><u>Email</u></p>
              <p>office@oez.kaluga.ru</p>
            </div>
          </div>

          <iframe title='iframe' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa54e6e4caf4030ada5cbadc1f66ab4da945eac246cee39db5657dc1fb2bc23a1&amp;source=constructor" width="678" height="435" frameborder="0"></iframe>
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}


function FreePlacesPage({page, setPage, setIsFormActive}) {
  const list = [
    {
      title: "Людиново",
      elements: [
        {
          name: "Людиново",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Людиново",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Людиново",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Людиново",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Людиново",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        }
      ]
    },
    {
      title: "Боровск",
      elements: [
        {
          name: "Боровск",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Боровск",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Боровск",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Боровск",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        },
        {
          name: "Боровск",
          code: "40:12:070101:126",
          square: "15,05 кв.м"
        }
      ]
    }
  ]

  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <PageTitle page={page} setPage={setPage} />
        <div className='grounds mb'>
          <h1>СВОБОДНЫЕ УЧАСТКИ</h1>
          <FreePlacesTable list={list[0]} />
          <FreePlacesTable list={list[1]} />
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

function FreePlacesTable({list}) {
  const tableList = []
  for (let i = 0; i < list.elements.length; i++) {
    tableList.push(<div className='plosh-info-table-text-block'>
      <p>{list.elements[i].name}</p>
      <p>{list.elements[i].code}</p>
      <p>{list.elements[i].square}</p>
    </div>)
  }

  return (
    <>
      <div className='plosh-info-table'>
        <div className='plosh-info-table-title-block'>
          <h4>{list.title}</h4>
        </div>
        {tableList}
      </div>
    </>
  )
}


function NewsPage({page, setPage, setIsFormActive}) {
  const [newsPageNumber, setNewsPageNumber] = useState(0)
  const [currentNew, setCurrentNew] = useState("")

  return (
    <>
      {currentNew !== "" ? 
      <OneNewPage page={page} setPage={setPage} currentNew={currentNew} newsPageNumber={newsPageNumber} setCurrentNew={setCurrentNew} setIsFormActive={setIsFormActive} /> :
      <NewsInnerBlock page={page} setPage={setPage} newsPageNumber={newsPageNumber} setNewsPageNumber={setNewsPageNumber} setCurrentNew={setCurrentNew} setIsFormActive={setIsFormActive} />
      }
    </>
  )
}

function NewsInnerBlock({page, setPage, newsPageNumber, setNewsPageNumber, setCurrentNew, setIsFormActive}) {
  let newsPage = [[], [], [], []]
  
  for (let i = 0; i < news[newsPageNumber].news.length; i++) {
    if (i <= 2) {
      newsPage[0].push(<NewsPageCard info={news[newsPageNumber].news[i]} setPage={setPage} setCurrentNew={setCurrentNew} />)
    } else if (i >= 3 && i <= 5) {
      newsPage[1].push(<NewsPageCard info={news[newsPageNumber].news[i]} setPage={setPage} setCurrentNew={setCurrentNew} />)
    } else if (i >= 6 && i <= 8) {
      newsPage[2].push(<NewsPageCard info={news[newsPageNumber].news[i]} setPage={setPage} setCurrentNew={setCurrentNew} />)
    } else {
      newsPage[3].push(<NewsPageCard info={news[newsPageNumber].news[i]} setPage={setPage} setCurrentNew={setCurrentNew} />)
    }
  }

  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <PageTitle page={page} setPage={setPage} />
        <div className='news mb'>
          <h1>НОВОСТИ</h1>
          <div className='news-cards-line'>
            {newsPage[0]}
          </div>
          <div className='news-cards-line'>
            {newsPage[1]}
          </div>
          <div className='news-cards-line'>
            {newsPage[2]}
          </div>
          <div className='news-cards-line'>
            {newsPage[3]}
          </div>

          <div className='pagination'>
            <PaginationElement news={news} setNewsPageNumber={setNewsPageNumber} newsPageNumber={newsPageNumber} />
          </div>
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

function NewsPageCard({info, setCurrentNew}) {
  let cardImg = "news-img"
  if (info.img === 1) {
    cardImg = "news-img news-img1"
  } else if (info.img === 2) {
    cardImg = "news-img news-img2"
  } else if (info.img === 3) {
    cardImg = "news-img news-img3"
  }

  return (
    <>
      <div className="news-card" onClick={() => {setCurrentNew(info.id)}}>
        <div className={cardImg}></div>
        <div className='news-card-text-block'>
          <p className='small gray'>{info.date}</p>
          <h4>{info.title}</h4>
          <p className='gray'>{info.text}</p>
        </div>
      </div>
    </>
  )
}

function PaginationElement({news, setNewsPageNumber, newsPageNumber}) {
  let paginationList = []
  let pagClass = 'pagination-element'
  for (let i = 0; i < news.length; i++) {
    if (newsPageNumber + 1 === news[i].page) {
      pagClass = 'pagination-element pag-el-active' 
    }
    paginationList.push(<p className={pagClass} onClick={() =>{setNewsPageNumber(i)}}><u>{news[i].page}</u></p>)
    pagClass = 'pagination-element'
  }

  return (
    <>
      {paginationList}
    </>
  )
}

function OneNewPage({page, setPage, currentNew, setCurrentNew, newsPageNumber, setIsFormActive}) {
  let newIndex = news[newsPageNumber].news.map(function(e) {
    return e.id
  }).indexOf(currentNew)
  const currentNewInfo = news[newsPageNumber].news[newIndex]

  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <NewPageTitle page={page} setPage={setPage} currentNewInfo={currentNewInfo} setCurrentNew={setCurrentNew} />
        <div className='currentNew'>
          <CurrentNewBlock currentNewInfo={currentNewInfo} />
          <SameNews currentNewInfo={currentNewInfo} setCurrentNew={setCurrentNew} newsPageNumber={newsPageNumber} />
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

function NewPageTitle({page, setPage, currentNewInfo, setCurrentNew}) {
  return (
    <>
      <div className='page-title-text-block'>
        {page === "news" && <p><u onClick={() => {setPage("main")}}>Главная / </u><u onClick={() => {setPage("news"); setCurrentNew("")}}>Новости / </u>{currentNewInfo.title}</p>}
      </div>
    </>
  )
}

function CurrentNewBlock({currentNewInfo}) {
  let cardImg = "one-new-img"
  if (currentNewInfo.img === 1) {
    cardImg = "one-new-img news-img1"
  } else if (currentNewInfo.img === 2) {
    cardImg = "one-new-img news-img2"
  } else if (currentNewInfo.img === 3) {
    cardImg = "one-new-img news-img3"
  }

  return (
    <>
      <div className='one-new mb'>
        <h3>{currentNewInfo.title}</h3>
        <p className='small gray'>{currentNewInfo.date}</p>
        <div className={cardImg}></div>
        <div className='one-new-text-block'>
          <p>{currentNewInfo.fulltext}</p>
        </div>

        <div className='one-new-socials-block'>
          <p><u>Поделиться в соц.сетях</u></p>
          <div className='one-new-socials-line'>
            <div className='one-new-social'>
              <img src={inst} className='one-new-social-img' alt='socials'></img>
            </div>
            <div className='one-new-social'>
              <img src={facebook} className='one-new-social-img smaller' alt='socials'></img>
            </div>
            <div className='one-new-social'>
              <img src={vk} className='one-new-social-img' alt='socials'></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SameNews({currentNewInfo, setCurrentNew, newsPageNumber}) {
  let sameNewList = []
  for (let i = 0; i < 3; i++) {
    sameNewList.push(<NewsPageCard info={news[newsPageNumber].news[i]} setCurrentNew={setCurrentNew} />)
  }
  
  return (
    <>
      <div className='same-news mb'>
        <h3>ПОХОЖИЕ НОВОСТИ</h3>
        <div className='news-cards-line'>
            {sameNewList}
        </div>
      </div>
    </>
  )
}


function GalleryPage({page, setPage, setIsFormActive}) {
  const [galleryPage, setGalleryPage] = useState(0)
  // 0 - all, 1 - ludino, 2 - borov

  return (
    <>
      <SideBar page={page} setPage={setPage} setIsFormActive={setIsFormActive} />
      <div className='container'>
        <PageTitle page={page} setPage={setPage} />
        <div className='gallery mb'>
          <h1>ГАЛЕРЕЯ</h1>
          <GalleryPageChange galleryPage={galleryPage} setGalleryPage={setGalleryPage} />
          <GalleryPageImages galleryPage={galleryPage} />
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

function GalleryPageChange({galleryPage, setGalleryPage}) {
  return (
    <>
      <div className='gallery-pagination-block'>
        <button className='gallery-pag-button' onClick={() => {setGalleryPage(0)}}>Все</button>
        <button className='gallery-pag-button' onClick={() => {setGalleryPage(1)}}>Людиновская площадка</button>
        <button className='gallery-pag-button' onClick={() => {setGalleryPage(2)}}>Боровская площадка</button>
      </div>
    </>
  )
}

function GalleryPageImages({galleryPage}) {
  let imgClass = "gallery-img"
  let galleryImgList = []
  if (galleryPage === 0) {
    for (let i = 0; i < galList[0].images.length; i++) {
      imgClass = "gallery-img " + galList[0].images[i]
      galleryImgList.push(<div className={imgClass}></div>)
    }
    for (let i = 0; i < galList[1].images.length; i++) {
      imgClass = "gallery-img " + galList[1].images[i]
      galleryImgList.push(<div className={imgClass}></div>)
    }
  } else {
    let imgIndex = galList.map(function(e) {return e.page}).indexOf(galleryPage)
    for (let i = 0; i < galList[imgIndex].images.length; i++) {
      imgClass = "gallery-img " + galList[imgIndex].images[i]
      galleryImgList.push(<div className={imgClass}></div>)
    }  
  }

  return (
    <>
      <div className='gallery-images-block'>
        {galleryImgList}
      </div>
    </>
  )
}

function ResidentForm({setIsFormActive}) {
  const [formStep, setFormStep] = useState(1)

  return (
    <>
    
      <div className='residents-form'>
        <div className='residents-form-container'>
        {formStep !== 4 ?
          <><div className='residents-form-title-line mb'>
            <h4><b>Заполните форму из 3 шагов, чтобы стать нашим резидентом</b></h4>
            <img src={cross} className='residents-form-icon' alt='cross' onClick={() => {setIsFormActive(false)}}></img>
          </div>

          <form className='residents-form-block' onSubmit={(e) => {e.preventDefault()}}>
            {formStep === 1 && <StepOne setFormStep={setFormStep} formStep={formStep} />}
            {formStep === 2 && <StepTwo setFormStep={setFormStep} formStep={formStep} />}
            {formStep === 3 && <StepThree setFormStep={setFormStep} formStep={formStep} />}


          </form></>
          :
            <FormResult setFormStep={setFormStep} setIsFormActive={setIsFormActive} />
          }
        </div>
      </div> 
      
    </>
  )
}

function StepOne({setFormStep, formStep}) {
  return (
    <>
      <div className='residents-form-inputs-block'>
        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-name' className='small'>Название компании</label>
            <input id='company-name' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-adress' className='small'>Адрес предприятия</label>
            <input id='company-adress' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>
        </div>

        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-inn' className='small'>ИНН</label>
            <input id='company-inn' className='residents-form-input' placeholder='Введите номер ИНН'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-ogrn' className='small'>ОГРН</label>
            <input id='company-ogrn' className='residents-form-input' placeholder='Введите номер ОГРН/ОГРНИП'></input>
          </div>
        </div>

        <div className='residents-form-input-item'>
          <label htmlFor='company-date' className='small'>Дата постановки на учёт</label>
          <input id='company-date' className='residents-form-input' placeholder='Введите номер ОГРН/ОГРНИП'></input>
        </div>
      </div>

      <div className='residents-form-line'>
        <p className='small'><u>Шаг {formStep} из 3</u></p>
        <button className='small-block' onClick={() => {setFormStep(n => n + 1)}}>Далее</button>
      </div>

    </>
  )
}

function StepTwo({setFormStep, formStep}) {
  return (
    <>
      <div className='residents-form-inputs-block'>

        <div className='residents-form-line'>
          <div className='residents-form-input-item-small'>
            <label htmlFor='company-square' className='small'>Площадь запрашиваемого участка, м2</label>
            <input id='company-square' className='residents-form-input' placeholder='Например 5 000 м2'></input>
          </div>

          <div className='residents-form-input-item-small'>
            <label htmlFor='company-length' className='small'>Минимальная длина, м</label>
            <input id='company-length' className='residents-form-input' placeholder='Например, 500 м'></input>
          </div>

          <div className='residents-form-input-item-small'>
            <label htmlFor='company-width' className='small'>Минимальная ширина, м</label>
            <input id='company-width' className='residents-form-input' placeholder='Например, 500 м'></input>
          </div>
        </div>

        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-ground-category' className='small'>Категория земли</label>
            <input id='company-ground-category' className='residents-form-input' placeholder='Введите номер ИНН'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-type' className='small'>Вид производства</label>
            <input id='company-type' className='residents-form-input' placeholder='Введите номер ОГРН/ОГРНИП'></input>
          </div>
        </div>

        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-danger' className='small'>Класс опасности производства, в т.ч пожароопасность</label>
            <input id='company-danger' className='residents-form-input' placeholder='Введите номер ИНН'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-sanitar' className='small'>Санитарно-защитная зона</label>
            <input id='company-sanitar' className='residents-form-input' placeholder='Введите номер ОГРН/ОГРНИП'></input>
          </div>
        </div>

        <p><u>ЭЛЕКТРОСНАБЖЕНИЕ</u></p>
        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-electro-type' className='small'>Электроснабжение, МВТ</label>
            <input id='company-electro-type' className='residents-form-input' placeholder='Введите номер ИНН'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-electro-category' className='small'>Электроснабжение, категория надежности</label>
            <input id='company-electro-category' className='residents-form-input' placeholder='Введите номер ОГРН/ОГРНИП'></input>
          </div>
        </div>

        <p><u>ГАЗОСНАБЖЕНИЕ</u></p>
        <div className='residents-form-line'>
          <div className='residents-form-input-item-small'>
            <label htmlFor='company-gas-year' className='small'>Кубометров/год</label>
            <input id='company-gas-year' className='residents-form-input' placeholder='Например 5 000 м2'></input>
          </div>

          <div className='residents-form-input-item-small'>
            <label htmlFor='company-gas-hour' className='small'>Кубометров/час</label>
            <input id='company-gas-hour' className='residents-form-input' placeholder='Например, 500 м'></input>
          </div>

          <div className='residents-form-input-item-small'>
            <label htmlFor='company-gas-presure' className='small'>Давление</label>
            <input id='company-gas-presure' className='residents-form-input' placeholder='Например, 500 м'></input>
          </div>
        </div>

        <p><u>ВОДОСНАБЖЕНИЕ</u></p>
        <div className='residents-form-line'>
          <div className='residents-form-input-item-small'>
            <label htmlFor='company-water-day' className='small'>Общее, кубометров в сутки</label>
            <input id='company-water-day' className='residents-form-input' placeholder='Например 5 000 м2'></input>
          </div>

          <div className='residents-form-input-item-small'>
            <label htmlFor='company-water-drink' className='small'>Питьевая, кубометров в сутки</label>
            <input id='company-water-drink' className='residents-form-input' placeholder='Например, 500 м'></input>
          </div>

          <div className='residents-form-input-item-small'>
            <label htmlFor='company-water-presure' className='small'>Давление</label>
            <input id='company-water-presure' className='residents-form-input' placeholder='Например, 500 м'></input>
          </div>
        </div>

        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-water-common' className='small'>Водоотведение хоз.-быт стоков, кубометров/сутки</label>
            <input id='company-water-common' className='residents-form-input' placeholder='Введите номер ИНН'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-water-rain' className='small'>Водоотведение ливневых вод л/сек.</label>
            <input id='company-water-rain' className='residents-form-input' placeholder='Введите номер ОГРН/ОГРНИП'></input>
          </div>
        </div>
      </div>

      <div className='residents-form-line'>
        <p className='small'><u>Шаг {formStep} из 3</u></p>
        <div className='buttons-block'>
          <p className='small back' onClick={() => {setFormStep(n => n - 1)}}><u>Назад</u></p>
          <button onClick={() => {setFormStep(n => n + 1)}}>Далее</button>
        </div>
      </div>
    </>
  )
}

function StepThree({setFormStep, formStep}) {
  return (
    <>
      <div className='residents-form-inputs-block'>
        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-gruz' className='small'>Грузооборот автотранспортом (автомобилей/сутки, грузоподъемность)</label>
            <input id='company-gruz' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-gd' className='small'>Наличие ж/д путей (необходимость, грузооборот вагонов/сутки)</label>
            <input id='company-gd' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>
        </div>

        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-work-places' className='small'>Количество рабочих мест</label>
            <input id='company-work-places' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-zp' className='small'>Средняя заработная плата</label>
            <input id='company-zp' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>
        </div>

        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-invest-sum' className='small'>Сумма инвестиций в проект</label>
            <input id='company-invest-sum' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-investors' className='small'>Источник средств</label>
            <input id='company-investors' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>
        </div>

        <div className='residents-form-input-item'>
          <label htmlFor='company-build-period' className='small'>Период строительства</label>
          <input id='company-build-period' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
        </div>

        <div className='residents-form-input-item for-textarea'>
          <label htmlFor='company-another' className='small'>Другие условия</label>
          <textarea id='company-another' className='residents-form-textarea' placeholder='Например ООО «Лес-строй»'></textarea>
        </div>

        <p><u>КОНТАТКТЫ</u></p>
        <div className='residents-form-input-item for-textarea'>
          <label htmlFor='company-fio' className='small'>ФИО контактного лица</label>
          <input id='company-fio' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
        </div>

        <div className='residents-form-line'>
          <div className='residents-form-input-item'>
            <label htmlFor='company-phone' className='small'>Телефон</label>
            <input id='company-phone' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>

          <div className='residents-form-input-item'>
            <label htmlFor='company-email' className='small'>Email</label>
            <input id='company-email' className='residents-form-input' placeholder='Например ООО «Лес-строй»'></input>
          </div>
        </div>
      </div>

      <div className='residents-form-line'>
        <p className='small'><u>Шаг {formStep} из 3</u></p>
        <div className='buttons-block'>
          <p className='small back' onClick={() => {setFormStep(n => n - 1)}}><u>Назад</u></p>
          <button onClick={() => {setFormStep(n => n + 1)}}>Далее</button>
        </div>
      </div>
    </>
  )
}

function FormResult({setFormStep, setIsFormActive}) {
  return (
    <>
      <div className='residents-form-title-line result-line mb'>
        <img src={cross} className='residents-form-icon' alt='cross' onClick={() => {setIsFormActive(false)}}></img>
      </div>
      <div className='form-result'>
        <h4><b>СПАСИБО, ВАША ЗАЯВКА ОТПРАВЛЕНА!</b></h4>
        <button className='small-block' onClick={() => {
          setIsFormActive(false);
          setFormStep(1)
        }}>Хорошо</button>
      </div>
    </>
  )
}