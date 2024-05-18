const Help = () => {
    return (
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
    )
}

export {Help};