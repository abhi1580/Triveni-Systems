import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} height="60" alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse${menuOpen ? ' show' : ''}`}>
          <div className="nav_left">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} end>Home</NavLink>
                <NavLink to="/services" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Services</NavLink>
                <NavLink to="/career" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Career</NavLink>
                <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Contact</NavLink>
              </div>
            </nav>
            <div className="position-relative d-inline-block me-lg-4">
              <input
                className="search_input ms-5 mb-3 mb-lg-0 ms-lg-0 pe-5 ps-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span className="position-absolute search_icon">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <NavLink to="/login" className="btn btn-primary navbar-login-btn ms-3">
              <i className="fas fa-sign-in-alt me-2"></i>Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
