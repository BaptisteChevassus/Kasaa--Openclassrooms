import { Link } from 'react-router'
import './Card.scss'

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt="" />
      <h3>{title}</h3>
    </Link>
  )
}

export default Card