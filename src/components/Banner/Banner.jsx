import './Banner.scss'


function Banner({ image, title, isLight = false }) {
  return (
    <section className={`banner${isLight ? ' banner--light' : ''}`}>
      <img className="banner__image" src={image} alt="" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

export default Banner
