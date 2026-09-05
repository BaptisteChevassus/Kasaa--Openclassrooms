import { NavLink } from 'react-router'
import logo from '../../assets/Kasa-logo-rouge.png'
import './Header.scss'

function navLinkClassName({ isActive }) {
  return isActive ? 'active' : undefined
}

function Header() {
  return (
    <header className="header">
      <h1 className="header__heading">
        <NavLink to="/">
          <img src={logo} alt="Kasa" className="header__logo" />
        </NavLink>
      </h1>
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
