import "keen-slider/keen-slider.css";
import { useKeenSlider} from "keen-slider/react"

const Gallery = () => {

  const [sliderRef] = useKeenSlider<HTMLDivElement>({

  },[])

    return (
        <div className="gallery" id="gallery">
        <div className="gallery__container">
          <div className="gallery__arrows">
            <div className="arrow arrow_prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
            <div className="arrow arrow_next">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25">
                <path d="M14 12.5 1.5 0 .805.694l12.5 12.5L14 12.5Z" />
                <path d="m.805 24.305 12.5-12.5.695.695L1.5 25l-.695-.695Z" />
              </svg>
            </div>
          </div>
          <div className="gallery__grid keen-slider" ref={sliderRef}>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-01.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-01.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-02.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-03.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-03.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-01.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-01.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-02.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-02.jpg" alt="" />
              </div>
            </a>
            <a
              className="gallery__item glightbox"
              href="images/gallery-image-03.jpg"
            >
              <div className="gallery__image">
                <img src="images/gallery-image-03.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    )
}

export {Gallery}