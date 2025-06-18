import { NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';
// import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <nav className="modern-navbar">
      <div className="navbar-logo">Triveni Systems</div>
      <div className="navbar-links">
        <NavLink to="/" end className="navbar-link">Home</NavLink>
        <NavLink to="/services" className="navbar-link">Services</NavLink>
        <NavLink to="/career" className="navbar-link">Career</NavLink>
        <NavLink to="/about" className="navbar-link">About Us</NavLink>
        <NavLink to="/contact" className="navbar-link">Contact Us</NavLink>
      </div>
      <div className="navbar-actions">
        <NavLink to="/login" className="btn btn-primary navbar-login-btn">
          <i className="fas fa-sign-in-alt me-2"></i>Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
