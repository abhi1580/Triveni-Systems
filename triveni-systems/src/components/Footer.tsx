import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer apple-footer py-5">
      <Container fluid>
        <Row className="py-8">
          <Col md={3} className="mb-6">
            <h5 className="footer-group-title">Triveni Systems Pvt. Ltd.</h5>
            <p className="footer-company-text">At Triveni Systems, we deliver innovative IT solutions designed for today's digital world. From web and mobile development to enterprise software, we help businesses thrive through smart, scalable technology. Our focus is on driving efficiency, growth, and digital transformation.</p>
          </Col>
          <Col md={3} className="mb-6">
            <h5 className="footer-group-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/career" className="footer-link">Career</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-6">
            <h5 className="footer-group-title">Newsletter</h5>
            <p className="footer-company-text">Subscribe to our newsletter for the latest updates.</p>
            <div className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
                aria-label="Email for newsletter"
              />
              <button className="footer-newsletter-button">Subscribe</button>
            </div>
          </Col>
          <Col md={3}>
            <h5 className="footer-group-title">Follow Us</h5>
            <div className="footer-socials">
              <a href="#" className="footer-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="footer-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="footer-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="mt-6">
          <Col className="text-center">
            <span className="footer-copyright">© {new Date().getFullYear()} Triveni Systems. All rights reserved.</span>
          </Col>
        </Row>
      </Container>
      <a 
        href="https://wa.me/918087992028?text=Hi%20Triveni%20Systems%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
        className="footer-whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="footer-whatsapp-tooltip">Get Quick Quote</span>
      </a>
    </footer>
  );
};

export default Footer;