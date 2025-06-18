import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="pe-lg-0 ps-lg-5 container-fluid justify-content-between">
        <a className="navbar-brand" href="/">
          <img src="/static_files/images/logo.png" height="60" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse${menuOpen ? ' show' : ''}`}>
          <div className="nav_left d-lg-flex align-items-center">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} end>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>About</NavLink>
                <NavLink to="/timing" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Timing</NavLink>
                <NavLink to="/courses" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Courses</NavLink>
              </div>
            </nav>
            <div className="position-relative d-inline-block me-lg-4">
              <input
                className="search_input ms-5 mb-3 mb-lg-0 ms-lg-0 pe-5 ps-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <img
                className="position-absolute search_img"
                src="/static_files/svgs/search.svg"
                width="16"
                height="16"
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
