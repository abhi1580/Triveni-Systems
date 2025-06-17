import { NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Button, Container } from 'react-bootstrap';
import '../styles/Navbar.css';
// import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <BSNavbar expand="lg" sticky="top" className="navbar">
      <Container fluid>
        <BSNavbar.Toggle aria-controls="navbar-content" />
        <BSNavbar.Collapse id="navbar-content" className="w-100">
          <Container className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {/* Uncomment below if you have a logo image */}
              {/* <BSNavbar.Brand as={NavLink} to="/">
                <img src={logo} alt="Logo" height="50" />
              </BSNavbar.Brand> */}
              <BSNavbar.Brand as={NavLink} to="/" className="navbar-brand">
                Triveni Systems
              </BSNavbar.Brand>
            </div>

            
            <Nav className="mx-auto text-center">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/career">Career</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
            </Nav>

            
            <div className="d-flex align-items-center">
              <NavLink to="/login" className="btn btn-outline-light">
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </NavLink>
            </div>
          </Container>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
