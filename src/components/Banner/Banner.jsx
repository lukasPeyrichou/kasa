import './Banner.scss'


function Banner({ image, title }) {
  return (
    <section className="banner">
      <img className="banner__image" src={image} alt="" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

export default Banner
