import { useState } from 'react'
import arrow from '../../assets/arrow-carousel.svg'
import './Slideshow.scss'

function Slideshow({ images }) {
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1
  const go = (delta) => setIndex((i) => (i + delta + images.length) % images.length)

  return (
    <div className="slideshow">
      <img key={index} src={images[index]} alt="" className="slideshow__image" />
      {hasMultiple && (
        <>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--prev"
            onClick={() => go(-1)}
            aria-label="Image précédente"
          >
            <img src={arrow} alt="" />
          </button>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--next"
            onClick={() => go(1)}
            aria-label="Image suivante"
          >
            <img src={arrow} alt="" />
          </button>
          <span className="slideshow__counter">
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow
