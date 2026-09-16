import { Navigate, useParams } from 'react-router'
import Collapse from '../../components/Collapse/Collapse.jsx'
import Host from '../../components/Host/Host.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import Slideshow from '../../components/Slideshow/Slideshow.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import logements from '../../data/logements.json'
import './Housing.scss'

function Housing() {
  const { id } = useParams()

  // On cherche le logement dont l'id correspond a celui de l'URL
  const logement = logements.find((item) => item.id === id)

  // Si aucun logement ne correspond, on redirige vers la page 404
  if (!logement) {
    return <Navigate to="/404" replace />
  }

  const { title, pictures, description, host, rating, location, equipments, tags } = logement

  return (
    <article className="housing">
      {/* key : repart de la premiere photo quand on change de logement */}
      <Slideshow key={id} pictures={pictures} title={title} />

      <div className="housing__header">
        <div className="housing__intro">
          <h1 className="housing__title">{title}</h1>
          <p className="housing__location">{location}</p>
          <ul className="housing__tags">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </ul>
        </div>

        <div className="housing__meta">
          <Host name={host.name} picture={host.picture} />
          <Rating rating={rating} />
        </div>
      </div>

      <div className="housing__details">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </article>
  )
}

export default Housing
