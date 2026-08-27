import { NavLink } from 'react-router'
import logo from '../../assets/Kasa-logo-rouge.png'
import './Header.scss'

function navLinkClassName({ isActive }) {
  return isActive ? 'active' : undefined
}

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/" end className={navLinkClassName}>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={navLinkClassName}>
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
