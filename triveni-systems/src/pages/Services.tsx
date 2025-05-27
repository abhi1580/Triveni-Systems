import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Craft sophisticated, responsive websites and web applications with modern design principles.',
    icon: 'fas fa-laptop-code',
  },
  {
    title: 'Android App Development',
    description: 'Engineer robust, high-performance native and hybrid Android applications tailored to client needs.',
    icon: 'fab fa-android',
  },
  {
    title: 'iOS App Development',
    description: 'Design and develop elegant, feature-rich iOS applications optimized for Apple ecosystems.',
    icon: 'fab fa-apple',
  },
  {
    title: 'Desktop Applications',
    description: 'Deliver scalable and high-efficiency desktop solutions compatible across major operating systems.',
    icon: 'fas fa-desktop',
  },
  {
    title: 'Digital Marketing',
    description: 'Elevate your brand’s digital footprint through data-driven and strategic marketing initiatives.',
    icon: 'fas fa-bullhorn',
  },
  {
    title: 'Modernization of Legacy Systems',
    description: 'Revitalize and upgrade legacy websites and applications to meet contemporary standards and performance.',
    icon: 'fas fa-sync-alt',
  }
];

const testimonials = [
  {
    name: "Rajeev Mehta",
    feedback: "Triveni Systems completely transformed our online presence. Highly professional and results-driven!",
  },
  {
    name: "Sneha Patel",
    feedback: "From mobile apps to digital marketing — they handled it all seamlessly. Highly recommended!",
  },
];

const technologies = [
  "React.js", "Node.js", "Python", "Flutter", "Swift", "Kotlin", "Bootstrap", "MongoDB", "MySQL", "AWS" ,"Azure", "Docker", "Kubernetes", "Git", "GraphQL", "REST APIs", "HTML5", "CSS3", "JavaScript", "TypeScript"
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5 bg-dark">
        <Container>
          <h1>Our Services</h1>
          <p className="lead">Comprehensive IT solutions tailored to your business needs.</p>
          <Button variant="primary" className="mt-3">Get a Free Consultation</Button>
        </Container>
      </section>

      {/* Services Cards */}
      <Container className="py-5">
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Body>
                  <Card.Title>
                    <i className={`${service.icon} me-2`}></i>
                    {service.title}
                  </Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


      {/* Technologies Section */}
      <section className="tech-stack py-5">
        <Container>
          <h2 className="text-center mb-4">Technologies We Use</h2>
          <Row className="justify-content-center">
            {technologies.map((tech, idx) => (
              <Col xs={6} md={3} className="mb-3 text-center" key={idx}>
                <span className="badge bg-secondary p-2 fs-6">{tech}</span>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Row>
            {testimonials.map((testi, idx) => (
              <Col md={6} key={idx}>
                <Card className="mb-3 shadow-sm">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>"{testi.feedback}"</p>
                      <footer className="blockquote-footer mt-2">{testi.name}</footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Prompt */}
      <section className="contact-cta text-center text-white py-5 bg-primary">
        <Container>
          <h3>Ready to Elevate Your Digital Presence?</h3>
          <p className="mb-3">Let’s discuss how we can bring your vision to life.</p>
          <Button variant="light" size="lg">Contact Us</Button>
        </Container>
      </section>
    </div>
  );
};

export default Services;
