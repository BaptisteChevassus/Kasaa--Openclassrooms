import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import aboutBanner from '../../assets/about-banner.jpg'
import './About.scss'

const valeurs = [
  {
    id: 'fiabilite',
    title: 'Fiabilité',
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: 'respect',
    title: 'Respect',
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: 'service',
    title: 'Service',
    text: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    id: 'securite',
    title: 'Sécurité',
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function About() {
  return (
    <div className="about">
      <h1 className="sr-only">À propos</h1>
      <Banner image={aboutBanner} overlayOpacity={0.3} />
      <div className="about__values">
        {valeurs.map((valeur) => (
          <Collapse key={valeur.id} title={valeur.title}>
            <p>{valeur.text}</p>
          </Collapse>
        ))}
      </div>
    </div>
  )
}

export default About
