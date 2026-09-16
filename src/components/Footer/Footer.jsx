import logo from '../../assets/logo-footer.svg'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Kasa" />
      <p className="footer__copyright">&copy; 2026 Kasa. Tous droits réservés</p>
    </footer>
  )
}

export default Footer
