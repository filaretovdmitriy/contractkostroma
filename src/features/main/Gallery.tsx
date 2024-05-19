import { useState } from "react";
import "keen-slider/keen-slider.css";
import { useKeenSlider } from "keen-slider/react";

import galleryImage01 from "../../assets/images/gallery-image-01.jpg";
import galleryImage02 from "../../assets/images/gallery-image-02.jpg";
import galleryImage03 from "../../assets/images/gallery-image-03.jpg";
import galleryImage04 from "../../assets/images/gallery-image-04.jpg";
import galleryImage05 from "../../assets/images/gallery-image-05.jpg";


const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
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
    <div className="gallery" id="gallery">
      <div className="gallery__container">
        {loaded && instanceRef.current && (
          <div className="gallery__arrows">
            <div
              className="arrow arrow_prev"
              onClick={(e: any) => {
                e.preventDefault();
                instanceRef.current?.prev();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
            <div
              className="arrow arrow_next"
              onClick={(e: any) => {
                e.preventDefault();
                instanceRef.current?.next();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
          </div>
        )}

        <div className="gallery__grid keen-slider" ref={sliderRef}>
          <div className="keen-slider__slide">
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-01.jpg"
            >
              <div className="gallery__image">
                <img src={galleryImage01} alt="" />
              </div>
            </a>
          </div>

          <div className="keen-slider__slide">
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src={galleryImage02} alt="" />
              </div>
            </a>
          </div>
          <div className="keen-slider__slide">
            <a
              className="gallery__item glightbox"
              href={galleryImage03}
            >
              <div className="gallery__image">
                <img src={galleryImage03} alt="" />
              </div>
            </a>
          </div>
          <div className="keen-slider__slide">
            <a
              className="gallery__item glightbox"
              href={galleryImage04}
            >
              <div className="gallery__image">
                <img src={galleryImage04} alt="" />
              </div>
            </a>
          </div>
          <div className="keen-slider__slide">
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src={galleryImage05} alt="" />
              </div>
            </a>
          </div>
          <div className="keen-slider__slide">
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-03.jpg"
            >
              <div className="gallery__image">
                <img src={galleryImage01} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Gallery };
