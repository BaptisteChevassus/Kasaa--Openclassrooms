import { Link } from 'react-router'
import './Error404.scss'

function Error404() {
  return (
    <div className="error404">
      <h2 className="error404__code">404</h2>
      <p className="error404__message">
        Oups! La page que <br />vous demandez n'existe pas.
      </p>
      <Link to="/" className="error404__link">
        Retourner sur la page d&rsquo;accueil
      </Link>
    </div>
  )
}

export default Error404
