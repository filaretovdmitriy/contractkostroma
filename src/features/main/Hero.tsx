import poster from "../../assets/images/hero-poster.jpg";
import video from "../../assets/videos/video.mp4";

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
        <video src={video} poster={poster} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export { Hero };
