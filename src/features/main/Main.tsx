import { Hero } from "./Hero";
import { Howto } from "./Howto";
import { Payments } from "./Payments";
import { Requirements } from "./Requirements";
import { Support } from "./Support";

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Payments />
      <Support />
      <Requirements />
      <Howto />

      <div className="army" id="army">
        <div className="army__container">
          <div className="army__title">
            <div className="arrow arrow_prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
            <div className="heading-1">Рода войск</div>
            <div className="arrow arrow_next">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
          </div>
          <div className="army__grid">
            <div className="army__item">
              <div className="army__image">
                <img src="images/army-type-01.jpg" />
              </div>
              <div className="army__text">
                <div className="heading-3">Артиллерия</div>
              </div>
            </div>
            <div className="army__item">
              <div className="army__image">
                <img src="images/army-type-02.jpg" />
              </div>
              <div className="army__text">
                <div className="heading-3">ВДВ</div>
              </div>
            </div>
            <div className="army__item">
              <div className="army__image">
                <img src="images/army-type-03.jpg" />
              </div>
              <div className="army__text">
                <div className="heading-3">РХБЗ</div>
              </div>
            </div>
            <div className="army__item">
              <div className="army__image">
                <img src="images/army-type-04.jpg" />
              </div>
              <div className="army__text">
                <div className="heading-3">Мотострелковые</div>
              </div>
            </div>
            <div className="army__item">
              <div className="army__image">
                <img src="images/army-type-05.jpg" />
              </div>
              <div className="army__text">
                <div className="heading-3">иные</div>
              </div>
            </div>
          </div>
          <div className="army__actions">
            <a className="btn smooth" href="#join">
              Выбрать специальность
            </a>
          </div>
        </div>
      </div>
      <div className="steps" id="steps">
        <div className="steps__container">
          <div className="steps__title">
            <div className="heading-1">
              Порядок поступления на военную службу контрактника
            </div>
          </div>
          <div className="steps__grid">
            <div className="steps__item">
              <div className="steps__number">1</div>
              <div className="steps__text">
                <div className="heading-3">
                  Обратиться в пункт сбора или военный комиссариат
                </div>
              </div>
            </div>
            <div className="steps__item">
              <div className="steps__number">2</div>
              <div className="steps__text">
                <div className="heading-3">
                  Пройти собеседование с психологом в пункте отбора
                </div>
              </div>
            </div>
            <div className="steps__item">
              <div className="steps__number">3</div>
              <div className="steps__text">
                <div className="heading-3">
                  Пройти медицинский осмотр в военном комиссариате
                </div>
              </div>
            </div>
            <div className="steps__item">
              <div className="steps__number">4</div>
              <div className="steps__text">
                <div className="heading-3">Заключить контракт</div>
              </div>
            </div>
            <div className="steps__item">
              <div className="steps__number">5</div>
              <div className="steps__text">
                <div className="heading-3">
                  Получить предписание и убыть к месту службы
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery" id="gallery">
        <div className="gallery__container">
          <div className="gallery__arrows">
            <div className="arrow arrow_prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
            <div className="arrow arrow_next">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
          </div>
          <div className="gallery__grid">
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-01.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-01.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-02.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-03.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-03.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-01.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-01.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-02.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-03.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-03.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="help" id="help">
        <div className="help__container">
          <div className="help__image">
            <img src="images/content-image-03.jpg" />
          </div>
          <div className="help__content">
            <div className="help__title">
              <div className="heading-1">
                Помощь семьям <br />
                военнослужащих
              </div>
            </div>
            <div className="help__text">
              Кадровые военные, призывники по частичной мобилизации и
              добровольцы, участвующие в специальной военной операции (СВО),
              имеют право на множество льгот и пособий. Преференции есть также и
              у членов их семей. Причем особые возможности доступны россиянам не
              только пока идут боевые действия, но сохранятся и после их
              окончания.
            </div>
            <div className="help__actions">
              <a className="btn smooth" href="#join">
                Записаться на службу
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="join" id="join">
        <div className="join__container">
          <div className="join__content">
            <div className="join__title">
              <div className="heading-1">Присоединяйтесь</div>
            </div>
            <div className="join__text">
              Укажите ФИО, категорию годности, телефон и время, удобное для
              звонка
            </div>
            <form className="join__form">
              <div className="join__form-row">
                <input type="text" placeholder="ФИО" />
              </div>
              <div className="join__form-row">
                <input
                  type="text"
                  placeholder="Категория, как в военном билете (А, Б)"
                />
              </div>
              <div className="join__form-row">
                <input type="text" placeholder="Телефон" />
              </div>
              <div className="join__form-row">
                <input type="text" placeholder="Удобное время звонка" />
              </div>
              <input
                className="btn"
                type="submit"
                value="Записаться на службу"
              />
            </form>
          </div>
          <div className="join__image">
            {/* <video
              autoplay=""
              muted=""
              loop=""
              id="join"
              poster="images/join-poster.jpg"
              playsinline=""
              defaultmuted=""
              preload="auto"
            >
              <source src="videos/1098725849.mp4" type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
      <div className="contacts" id="contacts">
        <div className="contacts__container">
          <div className="contacts__block">
            <div className="contacts__title">
              <div className="heading-1">Контакты</div>
            </div>
            <p className="text_gray">
              Прием граждан в общественных приемных Администрации г. Костромы
              ведется:
            </p>
            <div className="heading-3">
              пн-пт: с 14:00 до 20:00
              <br />
              сб: с 11:00 до 15:00
            </div>
            <p className="text_gray">
              По вопросам работы общественных приемных Администрации города
              Костромы обращаться по телефону:
            </p>
            <a className="heading-3" href="tel:+7 (4942) 31-05-05">
              +7 (4942) 31-05-05
            </a>
          </div>
          <div className="contacts__grid">
            <div className="contacts__item">
              <div className="heading-3">Фабричный округ</div>
              <div className="contacts__address">ул. Покровского, 45 «а»</div>
              <div className="contacts__address">ул. Боровая, 8</div>
              <div className="contacts__address">ул. Ново-Полянская, 7</div>
              <div className="contacts__address">ул. Ленина, 157</div>
              <div className="contacts__address">пр-т. Мира, 69 «а»</div>
            </div>
            <div className="contacts__item">
              <div className="heading-3">Фабричный округ</div>
              <div className="contacts__address">ул. Войкова, 41 «а»</div>
              <div className="contacts__address">3-й Сосновый пр-д, 6 «а»</div>
              <div className="contacts__address">ул. Никитская, 100</div>
              <div className="contacts__address">ул. Дальняя, 1 «б»</div>
              <div className="contacts__address">ул. Северной правды, 32</div>
            </div>
            <div className="contacts__item">
              <div className="heading-3">Давыдовский округ</div>
              <div className="contacts__address">ул. Индустриальная, 14</div>
              <div className="contacts__address">ул. Профсоюзная, 25/2</div>
              <div className="contacts__address">ул. Старокараваевская.1</div>
            </div>
            <div className="contacts__item">
              <div className="heading-3">Заволжский округ</div>
              <div className="contacts__address">Березовый пр-д, 3,</div>
              <div className="contacts__address">ул. Крупской, 27 «а»</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Main };
