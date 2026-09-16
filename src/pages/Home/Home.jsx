import bannerImage from '../../assets/banner-home.jpg'
import Banner from '../../components/Banner/Banner.jsx'
import Card from '../../components/Card/Card.jsx'
import logements from '../../data/logements.json'
import './Home.scss'

function Home() {
  return (
    <>
      <Banner
        image={bannerImage}
        title={
          <>
            <span>Chez vous, </span>
            <span>partout et ailleurs</span>
          </>
        }
      />
      <section className="gallery">
        {logements.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </section>
    </>
  )
}

export default Home
