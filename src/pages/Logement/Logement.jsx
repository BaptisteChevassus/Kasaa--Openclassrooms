import { Navigate, useParams } from 'react-router'
import logements from '../../data/logements.json'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'
import './Logement.scss'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) return <Navigate to="/404" replace />

  const { title, pictures, location, tags, rating, host, description, equipments } = logement

  return (
    <div className="logement">
      <Slideshow images={pictures} />
      <div className="logement__info">
        <h2 className="logement__title">{title}</h2>
        <p className="logement__location">{location}</p>
        <div className="logement__tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="logement__rating">
          <Rating value={Number(rating)} />
        </div>
        <div className="logement__host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
      </div>
      <div className="logement__collapses">
        <Collapse title="Description" titleAs="h3">
          <p>{description}</p>
        </Collapse>
        <Collapse title="Équipements" titleAs="h3">
          <ul>
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Logement
