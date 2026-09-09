import { useState } from 'react'
import './Collapse.scss'

/**
 * Section repliable reutilisee sur la page A propos (titre + paragraphe)
 * et sur la page Logement (titre + liste d'equipements), via children.
 * Ferme par defaut au chargement, comme demande dans le brief.
 */
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        {/* La rotation est portee par ce span plutot que par le <svg> :
            transform sur un <svg> racine reste capricieux selon les moteurs,
            et le span donne une boite stable a animer. */}
        <span className="collapse__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M4.5 7L9 11.5L13.5 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {/* Le contenu reste dans le DOM meme ferme, pour une animation de
          hauteur fluide (voir Collapse.scss) plutot qu'un demontage brutal. */}
      <div className={`collapse__panel${isOpen ? ' collapse__panel--open' : ''}`}>
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  )
}

export default Collapse
