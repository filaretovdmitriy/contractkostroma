const Requirements = () => {
  return (
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
                <li>Годен к военной службе с незначительными ограничениями</li>
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
            <a className="btnsmooth" href="#join">
              Записаться на службу
            </a>
          </div>
        </div>
        <div className="requirements__image">
          <img src="images/content-image-01.png" />
        </div>
      </div>
    </div>
  );
};

export { Requirements };
