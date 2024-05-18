const Steps = () => {
    return (
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
    )
}
export {Steps};