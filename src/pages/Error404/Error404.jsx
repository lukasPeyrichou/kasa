import { Link } from 'react-router'
import './Error404.scss'

function Error404() {
  return (
    <section className="error404">
      <h1 className="error404__code">404</h1>
      <p className="error404__message">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link className="error404__link" to="/">
        Retourner sur la page d&apos;accueil
      </Link>
    </section>
  )
}

export default Error404
