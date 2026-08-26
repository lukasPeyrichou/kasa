import { Link } from 'react-router'
import './Card.scss'

/**
 * Vignette d'un logement sur la page d'accueil.
 * Toute la carte est cliquable et mene vers la page du logement.
 */
function Card({ id, title, cover }) {
  return (
    <Link className="card" to={`/logement/${id}`}>
      {/* Le titre adjacent nomme deja le lien : l'image reste decorative. */}
      <img className="card__cover" src={cover} alt="" loading="lazy" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card
