// TODO placeholder : la vraie photo (montagnes) n'a pas pu etre exportee
// de Figma (node-id de l'ecran A_propos introuvable via l'API). A remplacer.
import bannerImage from '../../assets/banner-about-placeholder.svg'
import Banner from '../../components/Banner/Banner.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import './About.scss'

// TODO texte provisoire : les vrais textes sont dans le prototype Figma
// (double-clic sur le composant Collapse -> colonne "content"), pas dans
// le fichier de design lui-meme. A remplacer avant la soutenance.
const values = [
  { id: 'fiabilite', title: 'Fiabilité', text: '⟨ Texte à insérer — voir prototype Figma ⟩' },
  { id: 'respect', title: 'Respect', text: '⟨ Texte à insérer — voir prototype Figma ⟩' },
  { id: 'service', title: 'Service', text: '⟨ Texte à insérer — voir prototype Figma ⟩' },
  { id: 'securite', title: 'Sécurité', text: '⟨ Texte à insérer — voir prototype Figma ⟩' },
]

function About() {
  return (
    <>
      <Banner image={bannerImage} />
      <section className="about-values">
        {values.map(({ id, title, text }) => (
          <Collapse key={id} title={title}>
            <p>{text}</p>
          </Collapse>
        ))}
      </section>
    </>
  )
}

export default About
