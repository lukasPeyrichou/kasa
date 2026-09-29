import { Link } from 'react-router'
import './Card.scss'

// Vignette cliquable menant a la page du logement
function Card({ id, title, cover }) {
  return (
    <Link className="card" to={`/logement/${id}`}>
      <img className="card__cover" src={cover} alt="" loading="lazy" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card
