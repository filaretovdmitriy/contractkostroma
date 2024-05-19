import "keen-slider/keen-slider.css";
import { useKeenSlider } from "keen-slider/react";

import ArmyT01 from "../../assets/images/army-type-01.jpg";
import ArmyT02 from "../../assets/images/army-type-02.jpg";
import ArmyT03 from "../../assets/images/army-type-03.jpg";
import ArmyT04 from "../../assets/images/army-type-04.jpg";
import ArmyT05 from "../../assets/images/army-type-05.jpg";

const Army = () => {
  
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged() {
        console.log("!");
      },
      loop: true,
      slides: {
        perView: 5,
        spacing: 15,
      },
    },
    []
  );

  return (
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
        <div className="army__grid keen-slider" ref={sliderRef}>
          <div className="army__item keen-slider__slide">
            <div className="army__image">
              <img src={ArmyT01} />
            </div>
            <div className="army__text">
              <div className="heading-3">Артиллерия</div>
            </div>
          </div>
          <div className="army__item keen-slider__slide">
            <div className="army__image">
              <img src={ArmyT02} />
            </div>
            <div className="army__text">
              <div className="heading-3">ВДВ</div>
            </div>
          </div>
          <div className="army__item keen-slider__slide">
            <div className="army__image">
              <img src={ArmyT03} />
            </div>
            <div className="army__text">
              <div className="heading-3">РХБЗ</div>
            </div>
          </div>
          <div className="army__item keen-slider__slide">
            <div className="army__image">
              <img src={ArmyT04} />
            </div>
            <div className="army__text">
              <div className="heading-3">Мотострелковые</div>
            </div>
          </div>
          <div className="army__item keen-slider__slide">
            <div className="army__image">
              <img src={ArmyT05} />
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
  );
};

export { Army };
