const Hero = () => {
  return (
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
          <a className="btn smooth" href="#join">
            Перезвоните мне
          </a>
        </div>
      </div>
      <div className="hero__bg">
        {/* <video
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
          </video> */}
      </div>
    </div>
  );
};

export { Hero };
