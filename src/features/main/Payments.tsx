const Payments = () => {
  return (
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
                  от 30 до 45 тыс. рублей в мес.
                  <span>
                    (в зависимости от звания, должности и выслуги лет)
                  </span>
                </li>
                <li>
                  195 тыс рублей единовременно
                  <span>
                    (при заключении контракта на срок от года и более)
                  </span>
                </li>
              </ul>
              <hr />
              <div className="heading-3">В зоне СВО</div>
              <ul>
                <li>
                  от 170 до 200 тыс рублей в мес.
                  <span>
                    (в зависимости от звания, должности и выслуги лет)
                  </span>
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
                Льготы и выплаты в соответствии с региональным законодательством
              </div>
              <ul>
                <li>
                  Освобождение ветеранов боевых действий от уплаты транспортного
                  налога
                </li>
                <li>Ежемесячная доплата к пенсии в размере 900р</li>
                <li>
                  Утвержденные нормативы заготовки древесины для собственных
                  нужд:1. для строительства жилых домов - до 250 куб м. Для
                  ремонта и реконструкции жилых домов - до 32 куб. м. Для
                  строительства, ремонта и реконструкции хозяйственных строений
                  - до 32 куб. м.
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
                Льготы и выплаты в соответствии с региональным законодательством
              </div>
              <ul>
                <li>
                  Освобождение ветеранов боевых действий от уплаты транспортного
                  налога
                </li>
                <li>Ежемесячная доплата к пенсии в размере 900р</li>
                <li>
                  Утвержденные нормативы заготовки древесины для собственных
                  нужд:1. для строительства жилых домов - до 250 куб м. Для
                  ремонта и реконструкции жилых домов - до 32 куб. м. Для
                  строительства, ремонта и реконструкции хозяйственных строений
                  - до 32 куб. м.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="payments__actions">
          <a className="btn smooth" href="#join">
            Записаться на службу
          </a>
        </div>
      </div>
    </div>
  );
};

export { Payments };
