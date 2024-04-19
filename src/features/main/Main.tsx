const Main = () => {
    return (
        <main className="main">
      <div className="hero" id="hero">
        <div className="hero__content">
          <div className="hero__title">
            Служба по контракту - работа для настоящих мужчин
          </div>
          <div className="hero__desc">
            Поступая на военную службу по контракту, вы выбираете стабильность,
            широкие возможности для самореализации, достойный уровень жизни и
            высокий социальный статус.
          </div>
          <div className="hero__actions">
            <a className="btn smooth" href="#join">Перезвоните мне</a>
          </div>
        </div>
        <div className="hero__bg">
          <video
            autoplay=""
            muted=""
            loop=""
            id="hero"
            poster="images/hero-poster.jpg"
            playsinline=""
            defaultmuted=""
            preload="auto"
          >
            <source src="videos/1032456449.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="payments" id="payments">
        <div className="payments__container">
          <div className="payments__title">
            <div className="arrow arrow_prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
            <div className="heading-1">Выплаты</div>
            <div className="arrow arrow_next">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
          </div>
          <div className="payments__grid">
            <div className="payment__wrapper">
              <div className="payment">
                <div className="heading-2">Федеральные</div>
                <div className="heading-3">В учебном центре</div>
                <ul>
                  <li>
                    от 30 до 45 тыс. рублей в мес.<span
                      >(в зависимости от звания, должности и выслуги лет)</span
                    >
                  </li>
                  <li>
                    195 тыс рублей единовременно<span
                      >(при заключении контракта на срок от года и более)</span
                    >
                  </li>
                </ul>
                <hr />
                <div className="heading-3">В зоне СВО</div>
                <ul>
                  <li>
                    от 170 до 200 тыс рублей в мес.<span
                      >(в зависимости от звания, должности и выслуги лет)</span
                    >
                  </li>
                  <li>
                    от 50 тыс. руб. до 1 млн руб. за уничтожение или захват
                    вооружения и военной техники противника
                  </li>
                  <li>
                    8 тыс. руб. ежедневно за участие в активных наступательных
                    действиях
                  </li>
                  <li>
                    50 тыс. рублей (за каждый километр продвижения в составе
                    штурмовых отрядов)
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment__wrapper">
              <div className="payment">
                <div className="heading-2">Региональные</div>
                <div className="heading-3">В учебном центре</div>
                <ul>
                  <li>50 тыс. рублей единовременно</li>
                </ul>
                <hr />
                <div className="heading-3">
                  Льготы и выплаты в соответствии с региональным
                  законодательством
                </div>
                <ul>
                  <li>
                    Освобождение ветеранов боевых действий от уплаты
                    транспортного налога
                  </li>
                  <li>Ежемесячная доплата к пенсии в размере 900р</li>
                  <li>
                    Утвержденные нормативы заготовки древесины для собственных
                    нужд:1. для строительства жилых домов - до 250 куб м. Для
                    ремонта и реконструкции жилых домов - до 32 куб. м. Для
                    строительства, ремонта и реконструкции хозяйственных
                    строений - до 32 куб. м.
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment__wrapper">
              <div className="payment">
                <div className="heading-2">Муниципальные</div>
                <div className="heading-3">В учебном центре</div>
                <ul>
                  <li>50 тыс. рублей единовременно</li>
                </ul>
                <hr />
                <div className="heading-3">
                  Льготы и выплаты в соответствии с региональным
                  законодательством
                </div>
                <ul>
                  <li>
                    Освобождение ветеранов боевых действий от уплаты
                    транспортного налога
                  </li>
                  <li>Ежемесячная доплата к пенсии в размере 900р</li>
                  <li>
                    Утвержденные нормативы заготовки древесины для собственных
                    нужд:1. для строительства жилых домов - до 250 куб м. Для
                    ремонта и реконструкции жилых домов - до 32 куб. м. Для
                    строительства, ремонта и реконструкции хозяйственных
                    строений - до 32 куб. м.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="payments__actions">
            <a className="btn smooth" href="#join">Записаться на службу</a>
          </div>
        </div>
      </div>
      <div className="support" id="support">
        <div className="support__container">
          <div className="support__title">
            <div className="heading-1">Меры поддержки</div>
          </div>
          <div className="support__grid">
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Возможность быстрого приобретения жилья за счет минобороны
                России через накопительно-ипотечную систему
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Единые дополнительные выплаты, льготы и гарантии субъектов РФ
                для военнослужащих по контракту
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Бесплатное обследование, лечение и реабилитация в
                военно-медицинских учреждениях
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Статус ветерана боевых действийи соответствующие выплаты
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Служебное жилье или компенсация за найм жилья
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Бюджетные места для обучения детей в вузах
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Страхование жизни и здоровьяза счет федерального бюджета
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                За будущими контрактниками бронируются рабочие места
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Бесплатный отдых детей в летних оздоровительных лагерях
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">
                Право на льготную пенсию после 20 лет службы
              </div>
            </div>
            <div className="support__item">
              <div className="support__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
                  <path
                    d="m7.837 13.423-5.483-5.33L0 10.38 7.837 18 24 2.289 21.646 0 7.837 13.423Z"
                  />
                </svg>
              </div>
              <div className="support__text">Кредитные и налоговые каникулы</div>
            </div>
          </div>
        </div>
      </div>
      <div className="requirements" id="requirements">
        <div className="requirements__container">
          <div className="requirements__content">
            <div className="requirements__title">
              <div className="heading-1">Требования</div>
            </div>
            <p className="text_gray">
              По всем имеющимся вопросам можно обратиться по телефону:
            </p>
            <div className="heading-3">+7 (4942) 22-33-44</div>
            <p className="text_gray">или по адресу:</p>
            <div className="heading-3">156000, г. Кострома, Советская, 120</div>
            <div className="requirements__params">
              <div className="requirements__item">
                <div className="heading-3">Здоровье</div>
                <ul>
                  <li>Годен к военной службе</li>
                  <li>
                    Годен к военной службе с незначительными ограничениями
                  </li>
                </ul>
              </div>
              <div className="requirements__item">
                <div className="heading-3">Возраст</div>
                <ul>
                  <li>Заключение первого контракта - 18 - 140 лет</li>
                  <li>Предельный возраст - 50 лет + 10 лет сверх предела</li>
                </ul>
              </div>
            </div>
            <div className="requirements__actions">
              <a className="btnsmooth" href="#join">Записаться на службу</a>
            </div>
          </div>
          <div className="requirements__image">
            <img src="images/content-image-01.png" />
          </div>
        </div>
      </div>
      <div className="howto" id="howto">
        <div className="howto__container">
          <div className="howto__image">
            <img src="images/content-image-02.png" />
          </div>
          <div className="howto__content">
            <div className="howto__title">
              <div className="heading-1">
                Как заключить <br />
                контракт?
              </div>
            </div>
            <div className="howto__grid">
              <a className="howto__item" href="#">
                <div className="howto__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                  >
                    <path
                      d="M4 29h2v3H4c-1.125-.042-2.063-.438-2.813-1.188S.042 29.125 0 28V4c.042-1.125.437-2.063 1.188-2.813C1.938.438 2.875.042 4 0h10.375c1.083 0 2.02.396 2.813 1.188l5.625 5.625C23.604 7.604 24 8.563 24 9.688V18h-3v-8h-5c-.583 0-1.063-.188-1.438-.563C14.188 9.063 14 8.584 14 8V3H4c-.625.042-.958.375-1 1v24c.042.625.375.958 1 1zm7-7h2c1 .042 1.833.375 2.5 1 .625.667.958 1.5 1 2.5-.042 1-.375 1.833-1 2.5-.667.625-1.5.958-2.5 1h-1v2c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 5c.917-.083 1.417-.583 1.5-1.5-.083-.917-.583-1.417-1.5-1.5h-1v3h1zm6-5h2c.833.042 1.542.333 2.125.875.542.583.833 1.292.875 2.125v4c-.042.833-.333 1.542-.875 2.125-.583.542-1.292.833-2.125.875h-2c-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 8c.625-.042.958-.375 1-1v-4c-.042-.625-.375-.958-1-1h-1v6h1zm5-7c.042-.625.375-.958 1-1h3c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v2h2c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v3c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8z"
                    />
                  </svg>
                </div>
                <div className="howto__text">
                  Перечень необходимых документов<span>pdf, 201kb</span>
                </div></a
              ><a className="howto__item" href="#">
                <div className="howto__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                  >
                    <path
                      d="M4 29h2v3H4c-1.125-.042-2.063-.438-2.813-1.188S.042 29.125 0 28V4c.042-1.125.437-2.063 1.188-2.813C1.938.438 2.875.042 4 0h10.375c1.083 0 2.02.396 2.813 1.188l5.625 5.625C23.604 7.604 24 8.563 24 9.688V18h-3v-8h-5c-.583 0-1.063-.188-1.438-.563C14.188 9.063 14 8.584 14 8V3H4c-.625.042-.958.375-1 1v24c.042.625.375.958 1 1zm7-7h2c1 .042 1.833.375 2.5 1 .625.667.958 1.5 1 2.5-.042 1-.375 1.833-1 2.5-.667.625-1.5.958-2.5 1h-1v2c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 5c.917-.083 1.417-.583 1.5-1.5-.083-.917-.583-1.417-1.5-1.5h-1v3h1zm6-5h2c.833.042 1.542.333 2.125.875.542.583.833 1.292.875 2.125v4c-.042.833-.333 1.542-.875 2.125-.583.542-1.292.833-2.125.875h-2c-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 8c.625-.042.958-.375 1-1v-4c-.042-.625-.375-.958-1-1h-1v6h1zm5-7c.042-.625.375-.958 1-1h3c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v2h2c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v3c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8z"
                    />
                  </svg>
                </div>
                <div className="howto__text">
                  Адреса комиссариатов области и города<span>pdf, 201kb</span>
                </div></a
              ><a className="howto__item" href="#">
                <div className="howto__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                  >
                    <path
                      d="M4 29h2v3H4c-1.125-.042-2.063-.438-2.813-1.188S.042 29.125 0 28V4c.042-1.125.437-2.063 1.188-2.813C1.938.438 2.875.042 4 0h10.375c1.083 0 2.02.396 2.813 1.188l5.625 5.625C23.604 7.604 24 8.563 24 9.688V18h-3v-8h-5c-.583 0-1.063-.188-1.438-.563C14.188 9.063 14 8.584 14 8V3H4c-.625.042-.958.375-1 1v24c.042.625.375.958 1 1zm7-7h2c1 .042 1.833.375 2.5 1 .625.667.958 1.5 1 2.5-.042 1-.375 1.833-1 2.5-.667.625-1.5.958-2.5 1h-1v2c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 5c.917-.083 1.417-.583 1.5-1.5-.083-.917-.583-1.417-1.5-1.5h-1v3h1zm6-5h2c.833.042 1.542.333 2.125.875.542.583.833 1.292.875 2.125v4c-.042.833-.333 1.542-.875 2.125-.583.542-1.292.833-2.125.875h-2c-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 8c.625-.042.958-.375 1-1v-4c-.042-.625-.375-.958-1-1h-1v6h1zm5-7c.042-.625.375-.958 1-1h3c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v2h2c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v3c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8z"
                    />
                  </svg>
                </div>
                <div className="howto__text">
                  Информация для добровольцев<span>pdf, 201kb</span>
                </div></a
              ><a className="howto__item" href="#">
                <div className="howto__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                  >
                    <path
                      d="M4 29h2v3H4c-1.125-.042-2.063-.438-2.813-1.188S.042 29.125 0 28V4c.042-1.125.437-2.063 1.188-2.813C1.938.438 2.875.042 4 0h10.375c1.083 0 2.02.396 2.813 1.188l5.625 5.625C23.604 7.604 24 8.563 24 9.688V18h-3v-8h-5c-.583 0-1.063-.188-1.438-.563C14.188 9.063 14 8.584 14 8V3H4c-.625.042-.958.375-1 1v24c.042.625.375.958 1 1zm7-7h2c1 .042 1.833.375 2.5 1 .625.667.958 1.5 1 2.5-.042 1-.375 1.833-1 2.5-.667.625-1.5.958-2.5 1h-1v2c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 5c.917-.083 1.417-.583 1.5-1.5-.083-.917-.583-1.417-1.5-1.5h-1v3h1zm6-5h2c.833.042 1.542.333 2.125.875.542.583.833 1.292.875 2.125v4c-.042.833-.333 1.542-.875 2.125-.583.542-1.292.833-2.125.875h-2c-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 8c.625-.042.958-.375 1-1v-4c-.042-.625-.375-.958-1-1h-1v6h1zm5-7c.042-.625.375-.958 1-1h3c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v2h2c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v3c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8z"
                    />
                  </svg>
                </div>
                <div className="howto__text">
                  Информация для иностранных граждан<span>pdf, 201kb</span>
                </div></a
              ><a className="howto__item" href="#">
                <div className="howto__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                  >
                    <path
                      d="M4 29h2v3H4c-1.125-.042-2.063-.438-2.813-1.188S.042 29.125 0 28V4c.042-1.125.437-2.063 1.188-2.813C1.938.438 2.875.042 4 0h10.375c1.083 0 2.02.396 2.813 1.188l5.625 5.625C23.604 7.604 24 8.563 24 9.688V18h-3v-8h-5c-.583 0-1.063-.188-1.438-.563C14.188 9.063 14 8.584 14 8V3H4c-.625.042-.958.375-1 1v24c.042.625.375.958 1 1zm7-7h2c1 .042 1.833.375 2.5 1 .625.667.958 1.5 1 2.5-.042 1-.375 1.833-1 2.5-.667.625-1.5.958-2.5 1h-1v2c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 5c.917-.083 1.417-.583 1.5-1.5-.083-.917-.583-1.417-1.5-1.5h-1v3h1zm6-5h2c.833.042 1.542.333 2.125.875.542.583.833 1.292.875 2.125v4c-.042.833-.333 1.542-.875 2.125-.583.542-1.292.833-2.125.875h-2c-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 8c.625-.042.958-.375 1-1v-4c-.042-.625-.375-.958-1-1h-1v6h1zm5-7c.042-.625.375-.958 1-1h3c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v2h2c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v3c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8z"
                    />
                  </svg>
                </div>
                <div className="howto__text">
                  Анкета (образец)<span>pdf, 201kb</span>
                </div></a
              ><a className="howto__item" href="#">
                <div className="howto__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                  >
                    <path
                      d="M4 29h2v3H4c-1.125-.042-2.063-.438-2.813-1.188S.042 29.125 0 28V4c.042-1.125.437-2.063 1.188-2.813C1.938.438 2.875.042 4 0h10.375c1.083 0 2.02.396 2.813 1.188l5.625 5.625C23.604 7.604 24 8.563 24 9.688V18h-3v-8h-5c-.583 0-1.063-.188-1.438-.563C14.188 9.063 14 8.584 14 8V3H4c-.625.042-.958.375-1 1v24c.042.625.375.958 1 1zm7-7h2c1 .042 1.833.375 2.5 1 .625.667.958 1.5 1 2.5-.042 1-.375 1.833-1 2.5-.667.625-1.5.958-2.5 1h-1v2c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 5c.917-.083 1.417-.583 1.5-1.5-.083-.917-.583-1.417-1.5-1.5h-1v3h1zm6-5h2c.833.042 1.542.333 2.125.875.542.583.833 1.292.875 2.125v4c-.042.833-.333 1.542-.875 2.125-.583.542-1.292.833-2.125.875h-2c-.625-.042-.958-.375-1-1v-8c.042-.625.375-.958 1-1zm2 8c.625-.042.958-.375 1-1v-4c-.042-.625-.375-.958-1-1h-1v6h1zm5-7c.042-.625.375-.958 1-1h3c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v2h2c.625.042.958.375 1 1-.042.625-.375.958-1 1h-2v3c-.042.625-.375.958-1 1-.625-.042-.958-.375-1-1v-8z"
                    />
                  </svg>
                </div>
                <div className="howto__text">
                  Автобиография (образец)<span>pdf, 201kb</span>
                </div></a
              >
            </div>
            <div className="howto__actions">
              <a className="btn smooth" href="#join">Записаться на службу</a>
            </div>
          </div>
        </div>
      </div>
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
            <a className="btn smooth" href="#join">Выбрать специальность</a>
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
                <img src="images/gallery-image-01.jpg" alt="" /></div></a
            ><a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-02.jpg" alt="" /></div></a
            ><a
              className="gallery__item glightbox"
              href="images/gallery-image-03.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-03.jpg" alt="" /></div></a
            ><a
              className="gallery__item glightbox"
              href="images/gallery-image-01.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-01.jpg" alt="" /></div></a
            ><a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-02.jpg" alt="" /></div></a
            ><a
              className="gallery__item glightbox"
              href="images/gallery-image-03.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-03.jpg" alt="" /></div
            ></a>
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
              <a className="btn smooth" href="#join">Записаться на службу</a>
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
              <input className="btn" type="submit" value="Записаться на службу" />
            </form>
          </div>
          <div className="join__image">
            <video
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
            </video>
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
              пн-пт: с 14:00 до 20:00<br />сб: с 11:00 до 15:00
            </div>
            <p className="text_gray">
              По вопросам работы общественных приемных Администрации города
              Костромы обращаться по телефону:
            </p>
            <a className="heading-3" href="tel:+7 (4942) 31-05-05"
              >+7 (4942) 31-05-05</a
            >
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
    )
}

export {Main}