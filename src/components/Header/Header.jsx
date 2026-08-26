import { NavLink } from 'react-router'
import logo from '../../assets/logo-header.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <img src={logo} alt="Kasa" />
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
