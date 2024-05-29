import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">React Router</div>
      <div className="Navbar-actions">
        <NavLink to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Navbar