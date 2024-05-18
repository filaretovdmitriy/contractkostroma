const Contacts = () => {
    return (
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
    )
}

export {Contacts};