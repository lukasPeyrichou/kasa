import { useState } from 'react'
import './Slideshow.scss'

/**
 * Carrousel des photos d'un logement. Il boucle dans les deux sens et
 * masque fleches et compteur quand il n'y a qu'une seule image.
 */
function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = pictures.length
  const hasSeveralPictures = total > 1

  const showPrevious = () => setCurrentIndex((index) => (index - 1 + total) % total)
  const showNext = () => setCurrentIndex((index) => (index + 1) % total)

  return (
    <section className="slideshow" aria-label={`Photos du logement ${title}`}>
      <img
        className="slideshow__image"
        src={pictures[currentIndex]}
        alt={`${title} — photo ${currentIndex + 1} sur ${total}`}
      />

      {hasSeveralPictures && (
        <>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--previous"
            onClick={showPrevious}
            aria-label="Photo précédente"
          >
            <ChevronIcon />
          </button>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--next"
            onClick={showNext}
            aria-label="Photo suivante"
          >
            <ChevronIcon />
          </button>
          <p className="slideshow__counter" aria-live="polite">
            {currentIndex + 1}/{total}
          </p>
        </>
      )}
    </section>
  )
}

// Chevron vers la droite ; la fleche "precedente" le retourne en CSS.
function ChevronIcon() {
  return (
    <svg viewBox="0 0 48 80" fill="none" aria-hidden="true">
      <path
        d="M8 6L40 40L8 74"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Slideshow
