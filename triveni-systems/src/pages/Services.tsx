import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import heroVideo from '../assets/images/heroVideo.mp4'; // Placeholder for hero video

const services = [
  {
    title: 'Web Development',
    description: 'Craft responsive, high-performance websites with modern design.',
    icon: 'fas fa-laptop-code',
  },
  {
    title: 'Android Apps',
    description: 'Build robust, scalable Android applications for any device.',
    icon: 'fab fa-android',
  },
  {
    title: 'iOS Apps',
    description: 'Design elegant, feature-rich apps for the Apple ecosystem.',
    icon: 'fab fa-apple',
  },
  {
    title: 'Desktop Apps',
    description: 'Develop efficient desktop solutions for all platforms.',
    icon: 'fas fa-desktop',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your brand with strategic, data-driven campaigns.',
    icon: 'fas fa-bullhorn',
  },
  {
    title: 'Legacy Modernization',
    description: 'Upgrade legacy systems for modern performance and scalability.',
    icon: 'fas fa-sync-alt',
  },
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
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Python", icon: "fab fa-python" },
      { name: "GraphQL", icon: "fas fa-project-diagram" },
      { name: "REST APIs", icon: "fas fa-plug" },
    ],
  },
  {
    category: "Mobile Development",
    technologies: [
      { name: "Flutter", icon: "fas fa-mobile-alt" },
      { name: "Swift", icon: "fab fa-swift" },
      { name: "Kotlin", icon: "fab fa-android" },
    ],
  },
  {
    category: "Database & Cloud",
    technologies: [
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "AWS", icon: "fab fa-aws" },
      { name: "Azure", icon: "fab fa-microsoft" },
    ],
  },
  {
    category: "DevOps & Tools",
    technologies: [
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Kubernetes", icon: "fas fa-cube" },
      { name: "Git", icon: "fab fa-git-alt" },
    ],
  },
];

const testimonials = [
  {
    name: "Rajeev Mehta",
    feedback: "Triveni transformed our digital presence with professionalism and precision.",
  },
  {
    name: "Sneha Patel",
    feedback: "Seamless mobile apps and marketing solutions. Highly recommended!",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          src={heroVideo}
          aria-hidden="true"
        />
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="display-3 fw-bold animate__animated animate__fadeIn">
            Our Services
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Tailored IT solutions to elevate your business.
          </p>
          <Link
            to="/contact"
            className="btn btn-primary btn-lg animate__animated animate__fadeIn animate__delay-2s"
          >
            Get a Free Consultation
          </Link>
        </Container>
      </section>

      {/* Services Cards */}
      <section className="apple-offer-section">
        <Container>
          <h2 className="apple-offer-heading animate__animated animate__fadeIn">
            What We Offer
          </h2>
          <div className="apple-offer-grid">
            {services.map((service, index) => (
              <div
                className="apple-offer-card animate__animated animate__fadeInUp"
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="apple-offer-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="apple-offer-title">{service.title}</h3>
                <p className="apple-offer-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section: Plans */}
      <section className="pricing-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Pricing Plans
          </h2>
          <Row className="justify-content-center">
            {[
              {
                title: "Basic",
                price: "₹9,999",
                unit: "/project",
                features: [
                  "Single Page Website",
                  "Responsive Design",
                  "Basic SEO",
                  "Email Support",
                ],
                button: "btn-outline-primary",
                buttonText: "Get Started",
              },
              {
                title: "Standard",
                price: "₹24,999",
                unit: "/project",
                features: [
                  "Multi-Page Website",
                  "Responsive Design",
                  "Advanced Features",
                  "Enhanced SEO",
                  "Email Support",
                  "1 Month Free Support",
                ],
                button: "btn-primary",
                buttonText: "Choose Standard",
              },
              {
                title: "Premium",
                price: "₹49,999",
                unit: "/project",
                features: [
                  "Multi-Page Website",
                  "Responsive Design",
                  "Advanced Features",
                  "Enhanced SEO",
                  "Email Support",
                  "Custom Solutions",
                  "Priority Support",
                  "Marketing Integration",
                  "3 Months Free Support",
                ],
                button: "btn-outline-primary",
                buttonText: "Go Premium",
              },
            ].map((plan, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card
                  className={`h-100 pricing-card text-center animate__animated animate__fadeInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card.Body>
                    <Card.Title className="mb-3">{plan.title}</Card.Title>
                    <h3 className="pricing-price mb-3">
                      {plan.price} <small className="text-muted">{plan.unit}</small>
                    </h3>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className={`btn ${plan.button}`}>
                      {plan.buttonText}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing Section: By Service */}
      <section className="pricing-section py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Pricing by Service
          </h2>
          <Row className="justify-content-center">
            {services.map((service, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card
                  className="h-100 pricing-card text-center bg-dark text-light border-0 animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card.Body>
                    <Card.Title className="mb-3">
                      <i className={`${service.icon} me-2`}></i>
                      {service.title}
                    </Card.Title>
                    <h3 className="pricing-price mb-3">
                      {index === 0
                        ? "₹9,999+"
                        : index === 1
                        ? "₹19,999+"
                        : index === 2
                        ? "₹24,999+"
                        : index === 3
                        ? "₹29,999+"
                        : index === 4
                        ? "₹7,999+"
                        : "₹14,999+"}{" "}
                      <small className="text-muted">
                        {index === 4 ? "/month" : index < 4 ? "/app" : "/project"}
                      </small>
                    </h3>
                    <ul className="list-unstyled mb-4">
                      {[
                        index === 0 && ["Single/Multi Page Sites", "Responsive Design", "SEO Optimization", "CMS Integration"],
                        index === 1 && ["Native/Hybrid Apps", "Play Store Deployment", "UI/UX Design", "API Integration"],
                        index === 2 && ["Native/Hybrid Apps", "App Store Deployment", "UI/UX Design", "API Integration"],
                        index === 3 && ["Windows/Mac/Linux", "Custom Features", "Integration & Support", "Modern UI"],
                        index === 4 && ["SEO & SEM", "Social Media Management", "Content Marketing", "Analytics & Reporting"],
                        index === 5 && ["Code Refactoring", "UI/UX Upgrade", "Performance Boost", "Cloud Migration"],
                      ][index].map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-outline-light">
                      Get Quote
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="apple-tech-section">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Technologies We Use
          </h2>
          <div className="apple-tech-categories">
            {technologyCategories.map((category, categoryIndex) => (
              <div
                className="apple-tech-category animate__animated animate__fadeInUp"
                key={categoryIndex}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="apple-tech-category-title">{category.category}</h3>
                <div className="apple-tech-grid">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      className="apple-tech-item"
                      key={techIndex}
                    >
                      <i className={`apple-tech-icon ${tech.icon}`}></i>
                      <span className="apple-tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            What Our Clients Say
          </h2>
          <Row>
            {testimonials.map((testi, idx) => (
              <Col md={6} key={idx} className="mb-4">
                <Card
                  className="h-100 testimonial-card border-0 animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
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
      <section className="contact-cta text-center text-light py-5 bg-dark">
        <Container>
          <h3 className="mb-4 animate__animated animate__fadeIn">
            Ready to Elevate Your Business?
          </h3>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Let’s bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg animate__animated animate__fadeIn animate__delay-2s"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Services;