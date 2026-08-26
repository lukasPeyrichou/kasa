import './Banner.scss'

/**
 * Banniere illustree, reutilisee sur l'accueil et sur la page A propos.
 * Le titre est optionnel : la maquette de la page A propos n'en a pas.
 */
function Banner({ image, title }) {
  return (
    <section className="banner">
      {/* Image decorative : le titre porte deja le sens. */}
      <img className="banner__image" src={image} alt="" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

export default Banner
