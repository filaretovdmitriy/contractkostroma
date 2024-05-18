const Join = () => {
    return (
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
    )
}

export {Join}