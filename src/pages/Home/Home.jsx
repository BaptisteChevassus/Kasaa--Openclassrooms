import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import logements from '../../data/logements.json'
import bannerImage from '../../assets/home-banner.jpg'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <Banner
        image={bannerImage}
        title={
          <>
            Chez vous,<br /> partout et ailleurs
          </>
        }
      />
      <div className="cards-list">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home