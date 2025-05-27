import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import transparent_image from '../assets/images/transparent_image.png'; 


const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to Triveni Systems</h1>
          <p className="lead mb-4">
            Empowering businesses with innovative, scalable, and cutting-edge IT solutions tailored to your needs.
          </p>
          <Button variant="primary" size="lg" href="/services" className="me-3">
            <i className="fas fa-cogs me-2"></i>Explore Our Services
          </Button>
          <Button variant="outline-light" size="lg" href="/contact">
            <i className="fas fa-envelope me-2"></i>Contact Us
          </Button>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="about-section py-5 bg-light position-relative">
  <Container>
    <Row>
      <Col md={6}>
        <h2 className="mb-4">About Triveni Systems</h2>
        <p>
          Triveni Systems is a leading IT solutions provider dedicated to delivering innovative and reliable
          technology services. With over a decade of experience, we specialize in crafting bespoke solutions that
          address the unique challenges of businesses across various industries.
        </p>
        <p>
          Our mission is to empower organizations by leveraging the latest technologies, from cloud computing to
          artificial intelligence, ensuring seamless integration and measurable results.
        </p>
      </Col>
      <Col md={6} className="text-center">
        <img
  src={transparent_image}
  alt="Triveni Systems Team"
  className="img-fluid"
/>

      </Col>
    </Row>
    <div className="text-end mt-4">
      <Link to="/about" className="btn btn-primary">
  Know More  &rarr;
</Link>
    </div>
  </Container>
</section>


      <section className="services-section py-5">
  <Container>
    <h2 className="text-center mb-5">Our Services</h2>
    <Row>
      <Col md={4} className="mb-4">
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>
              <i className="fas fa-laptop-code me-2"></i>Web Development
            </Card.Title>
            <Card.Text>
              We create responsive and high-performing websites using modern technologies to ensure a seamless user experience across all devices.
            </Card.Text>
            <Button variant="link" href="/services">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>
              <i className="fab fa-android me-2"></i>Android Applications
            </Card.Title>
            <Card.Text>
              Develop robust Android applications tailored to your business needs, ensuring performance, security, and usability on every device.
            </Card.Text>
            <Button variant="link" href="/services">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>
              <i className="fab fa-apple me-2"></i>iOS Applications
            </Card.Title>
            <Card.Text>
              Get high-quality iOS applications that combine sleek design with powerful functionality, built to meet Apple’s rigorous standards.
            </Card.Text>
            <Button variant="link" href="/services">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Why Choose Triveni Systems?</h2>
          <Row>
            <Col md={3} className="text-center mb-4">
              <i className="fas fa-users fa-3x mb-3"></i>
              <h4>Expert Team</h4>
              <p>Our certified professionals bring years of experience to deliver top-notch solutions.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <i className="fas fa-rocket fa-3x mb-3"></i>
              <h4>Innovative Solutions</h4>
              <p>We stay ahead of the curve, integrating the latest technologies for maximum impact.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <i className="fas fa-headset fa-3x mb-3"></i>
              <h4>24/7 Support</h4>
              <p>Our dedicated support team is always ready to assist you, day or night.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <i className="fas fa-check-circle fa-3x mb-3"></i>
              <h4>Proven Results</h4>
              <p>Our solutions have empowered businesses worldwide to achieve their goals.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Text>
                    "Triveni Systems transformed our operations with their cloud solutions. Their team was professional
                    and responsive throughout the process."
                  </Card.Text>
                  <Card.Footer>
                    <small className="text-muted">— Jane Doe, CEO, TechCorp</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Text>
                    "The custom software developed by Triveni Systems streamlined our workflows, saving us time and money."
                  </Card.Text>
                  <Card.Footer>
                    <small className="text-muted">— John Smith, CTO, Innovate Inc.</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Text>
                    "Their cybersecurity expertise gave us peace of mind. Highly recommend their services!"
                  </Card.Text>
                  <Card.Footer>
                    <small className="text-muted">— Sarah Lee, CFO, Secure Solutions</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;