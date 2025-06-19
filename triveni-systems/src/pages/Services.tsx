import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    description: "Elevate your brand's digital footprint through data-driven and strategic marketing initiatives.",
    icon: 'fas fa-bullhorn',
  },
  {
    title: 'Modernization of Legacy Systems',
    description: 'Revitalize and upgrade legacy websites and applications to meet contemporary standards and performance.',
    icon: 'fas fa-sync-alt',
  }
];

const technologyCategories = [
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", icon: "fab fa-react" },
      { name: "TypeScript", icon: "fab fa-js" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" }
    ]
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Python", icon: "fab fa-python" },
      { name: "GraphQL", icon: "fas fa-project-diagram" },
      { name: "REST APIs", icon: "fas fa-plug" }
    ]
  },
  {
    category: "Mobile Development",
    technologies: [
      { name: "Flutter", icon: "fas fa-mobile-alt" },
      { name: "Swift", icon: "fab fa-swift" },
      { name: "Kotlin", icon: "fab fa-android" }
    ]
  },
  {
    category: "Database & Cloud",
    technologies: [
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "AWS", icon: "fab fa-aws" },
      { name: "Azure", icon: "fab fa-microsoft" }
    ]
  },
  {
    category: "DevOps & Tools",
    technologies: [
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Kubernetes", icon: "fas fa-cube" },
      { name: "Git", icon: "fab fa-git-alt" }
    ]
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

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5">
       
        <Container>
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead mb-4">Comprehensive IT solutions tailored to your business needs.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <i className="fas fa-headset me-2"></i>Get a Free Consultation
          </Link>
        </Container>
      </section>

      {/* Services Cards */}
      <section className="services-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">What We Offer</h2>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm service-card">
                  <Card.Body>
                    <Card.Title className="service-title">
                      <i className={`${service.icon} me-2`}></i>
                      {service.title}
                    </Card.Title>
                    <Card.Text className="service-description">{service.description}</Card.Text>
                    <Link to="/contact" className="btn btn-link">Learn More</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

       {/* Pricing Section: Plans */}
       <section className="pricing-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Pricing Plans</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3">Basic</Card.Title>
                  <h3 className="pricing-price mb-3">₹9,999 <small className="text-muted">/project</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Single Page Website</li>
                    <li>✔ Responsive Design</li>
                    <li>✔ Basic SEO</li>
                    <li>✔ Email Support</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Get Started</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center border-primary">
                <Card.Body>
                  <Card.Title className="mb-3">Standard</Card.Title>
                  <h3 className="pricing-price mb-3">₹24,999 <small className="text-muted">/project</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Multi-Page Website</li>
                    <li>✔ Responsive Design</li>
                    <li>✔ Advanced Features</li>
                    <li>✔ Enhanced SEO</li>
                    <li>✔ Email Support</li>
                    <li>✔ 1 Month Free Support</li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary">Choose Standard</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3">Premium</Card.Title>
                  <h3 className="pricing-price mb-3">₹49,999 <small className="text-muted">/project</small></h3>
                  <ul className="list-unstyled mb-4">
                  <li>✔ Multi-Page Website</li>
                  <li>✔ Responsive Design</li>
                  <li>✔ Advanced Features</li>
                    <li>✔ Enhanced SEO</li>
                    <li>✔ Email Support</li>
                    <li>✔ Custom Solutions</li>
                    <li>✔ Priority Support</li>
                    <li>✔ Marketing Integration</li>
                    <li>✔ 3 Months Free Support</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Go Premium</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section: By Service */}
      <section className="pricing-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Pricing by Service</h2>
          <Row className="justify-content-center">
            {/* Web Development */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3"><i className="fas fa-laptop-code me-2"></i>Web Development</Card.Title>
                  <h3 className="pricing-price mb-3">₹9,999+ <small className="text-muted">/project</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Single/Multi Page Sites</li>
                    <li>✔ Responsive Design</li>
                    <li>✔ SEO Optimization</li>
                    <li>✔ CMS Integration</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Get Quote</Link>
                </Card.Body>
              </Card>
            </Col>
            {/* Android App Development */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3"><i className="fab fa-android me-2"></i>Android App Development</Card.Title>
                  <h3 className="pricing-price mb-3">₹19,999+ <small className="text-muted">/app</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Native/Hybrid Apps</li>
                    <li>✔ Play Store Deployment</li>
                    <li>✔ UI/UX Design</li>
                    <li>✔ API Integration</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Get Quote</Link>
                </Card.Body>
              </Card>
            </Col>
            {/* iOS App Development */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3"><i className="fab fa-apple me-2"></i>iOS App Development</Card.Title>
                  <h3 className="pricing-price mb-3">₹24,999+ <small className="text-muted">/app</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Native/Hybrid Apps</li>
                    <li>✔ App Store Deployment</li>
                    <li>✔ UI/UX Design</li>
                    <li>✔ API Integration</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Get Quote</Link>
                </Card.Body>
              </Card>
            </Col>
            {/* Desktop Applications */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3"><i className="fas fa-desktop me-2"></i>Desktop Applications</Card.Title>
                  <h3 className="pricing-price mb-3">₹29,999+ <small className="text-muted">/project</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Windows/Mac/Linux</li>
                    <li>✔ Custom Features</li>
                    <li>✔ Integration & Support</li>
                    <li>✔ Modern UI</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Get Quote</Link>
                </Card.Body>
              </Card>
            </Col>
            {/* Digital Marketing */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3"><i className="fas fa-bullhorn me-2"></i>Digital Marketing</Card.Title>
                  <h3 className="pricing-price mb-3">₹7,999+ <small className="text-muted">/month</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ SEO & SEM</li>
                    <li>✔ Social Media Management</li>
                    <li>✔ Content Marketing</li>
                    <li>✔ Analytics & Reporting</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Get Quote</Link>
                </Card.Body>
              </Card>
            </Col>
            {/* Modernization of Legacy Systems */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm pricing-card text-center">
                <Card.Body>
                  <Card.Title className="mb-3"><i className="fas fa-sync-alt me-2"></i>Legacy System Modernization</Card.Title>
                  <h3 className="pricing-price mb-3">₹14,999+ <small className="text-muted">/project</small></h3>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Code Refactoring</li>
                    <li>✔ UI/UX Upgrade</li>
                    <li>✔ Performance Boost</li>
                    <li>✔ Cloud Migration</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-primary">Get Quote</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="tech-stack py-5 ">
        <Container>
          <h2 className="text-center mb-5">Technologies We Use</h2>
          <div className="tech-categories">
            {technologyCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="tech-category mb-5">
                <h3 className="category-title mb-4">{category.category}</h3>
                <Row className="justify-content-center">
                  {category.technologies.map((tech, techIndex) => (
                    <Col xs={6} sm={4} md={3} lg={2} key={techIndex} className="mb-4">
                      <div className="tech-item">
                        <i className={`${tech.icon} tech-icon`}></i>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </section>

     

      {/* Testimonials */}
      <section className="testimonials py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Row>
            {testimonials.map((testi, idx) => (
              <Col md={6} key={idx} className="mb-4">
                <Card className="h-100 shadow-sm testimonial-card">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <i className="fas fa-quote-left text-primary mb-3"></i>
                      <p className="testimonial-text">"{testi.feedback}"</p>
                      <footer className="blockquote-footer mt-3">
                        <cite title={testi.name}>{testi.name}</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Prompt */}
      <section className="contact-cta text-center text-white py-5 mb-0">
        <Container>
          <h3 className="mb-4">Ready to Elevate Your Digital Presence?</h3>
          <p className="lead mb-4">Let's discuss how we can bring your vision to life.</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            <i className="fas fa-paper-plane me-2"></i>Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Services;
