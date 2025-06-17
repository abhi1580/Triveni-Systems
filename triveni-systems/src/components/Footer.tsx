import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="py-8">
          <Col md={3} className="mb-6">
            <h5 className="footer-title">Triveni Systems</h5>
            <p className="footer-text">At Triveni Systems, we deliver innovative IT solutions designed for today's digital world. From web and mobile development to enterprise software, we help businesses thrive through smart, scalable technology. Our focus is on driving efficiency, growth, and digital transformation.</p>
          </Col>
          <Col md={3} className="mb-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/career" className="footer-link">Career</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-6">
            <h5 className="footer-title">Newsletter</h5>
            <p className="footer-text">Subscribe to our newsletter for the latest updates.</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-links">
              <a href="#" className="footer-social" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="footer-social" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer-social" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="footer-social" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="mt-6">
          <Col className="text-center">
            <p className="footer-text">© {new Date().getFullYear()} Triveni Systems. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
      <a 
        href="https://wa.me/919146334963" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Get Quick Question</span>
      </a>
    </footer>
  );
};

export default Footer;