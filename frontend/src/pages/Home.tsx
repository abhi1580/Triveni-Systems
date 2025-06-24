import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import heroVideo from '../assets/images/heroVideo.mp4';
import logo from '../assets/images/logo.png';
 // Placeholder for hero video
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
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
            Innovate with Triveni Systems
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Cutting-edge IT solutions designed to empower your business.
          </p>
          <div className="hero-buttons animate__animated animate__fadeIn animate__delay-2s">
            <Link to="/services" className="btn btn-primary btn-lg me-3">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="about-section py-5 bg-dark text-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <h2 className="mb-4">About Triveni Systems</h2>
              <p className="text-light">
                At Triveni Systems, we craft innovative IT solutions with precision and passion. With over a decade of expertise, we deliver tailored technology that drives success across industries.
              </p>
              <p className="text-light">
                From cloud to AI, our solutions are built to integrate seamlessly and deliver measurable impact.
              </p>
              <Link to="/about" className="btn btn-outline-light mt-3">
                Learn More
              </Link>
            </Col>
            <Col lg={6} className="text-center order-lg-1 mb-4 mb-lg-0">
            <img
  src={logo}
  alt="Triveni Systems Innovation"
  className="img-fluid rounded about-logo"
  loading="lazy"
/>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            {[
              {
                icon: "fas fa-laptop-code",
                title: "Web Development",
                text: "Sleek, responsive websites built for performance and user experience.",
              },
              {
                icon: "fab fa-android",
                title: "Android Applications",
                text: "Robust apps designed for scalability and seamless functionality.",
              },
              {
                icon: "fab fa-apple",
                title: "iOS Applications",
                text: "Premium iOS apps crafted to Apple's high standards.",
              },
            ].map((service, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="h-100 border-0 shadow-sm animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                  <Card.Body className="text-center">
                    <i className={`${service.icon} fa-2x mb-3 text-primary`}></i>
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                    <Link to="/services" className="btn btn-link stretched-link">
                      Learn More
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5">Why Triveni?</h2>
          <Row className="justify-content-center">
            {[
              { icon: "fas fa-users", title: "Expert Team", text: "Certified professionals delivering excellence." },
              { icon: "fas fa-rocket", title: "Innovation", text: "Cutting-edge tech for maximum impact." },
              { icon: "fas fa-headset", title: "24/7 Support", text: "Always here to assist you." },
              { icon: "fas fa-check-circle", title: "Proven Results", text: "Trusted by businesses worldwide." },
            ].map((feature, index) => (
              <Col md={3} className="text-center mb-4" key={index}>
                <i className={`${feature.icon} fa-3x mb-3 text-primary`}></i>
                <h4 className="fw-bold">{feature.title}</h4>
                <p>{feature.text}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Clients Section */}
      <section className="clients-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Trusted By</h2>
          <Row className="justify-content-center">
            {[
              { icon: "fas fa-building", title: "ABC Corporation", text: "Manufacturing leader in digital transformation." },
              { icon: "fas fa-hospital", title: "HealthPlus", text: "Healthcare provider enhancing patient care." },
              { icon: "fas fa-graduation-cap", title: "EduSmart", text: "EdTech innovator scaling with us." },
              { icon: "fas fa-shopping-cart", title: "ShopEase", text: "Retail leader with our e-commerce solutions." },
            ].map((client, index) => (
              <Col md={3} sm={6} className="mb-4 text-center" key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <i className={`${client.icon} fa-2x mb-3 text-primary`}></i>
                    <Card.Title className="fw-bold">{client.title}</Card.Title>
                    <Card.Text>{client.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Products Section */}
      <section className="products-section py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-5">Our Products</h2>
          <Row className="justify-content-center">
            {[
              { icon: "fas fa-cloud", title: "CloudSuite", text: "Scalable cloud platform for all businesses." },
              { icon: "fas fa-shield-alt", title: "SecureIT", text: "Advanced cybersecurity for your assets." },
              { icon: "fas fa-chart-line", title: "InsightPro", text: "Analytics for data-driven growth." },
            ].map((product, index) => (
              <Col md={4} sm={6} className="mb-4 text-center" key={index}>
                <Card className="h-100 border-0 bg-dark text-light">
                  <Card.Body>
                    <i className={`${product.icon} fa-2x mb-3 text-primary`}></i>
                    <Card.Title className="fw-bold">{product.title}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Investors Corner Section */}
      <section className="investors-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Investors</h2>
          <Row className="justify-content-center">
            {[
              { icon: "fas fa-newspaper", title: "Latest News", text: "Financial news and announcements." },
              { icon: "fas fa-file-alt", title: "Reports & Filings", text: "Access our financial documents." },
              { icon: "fas fa-envelope-open-text", title: "Investor Contact", text: "Reach our investor relations team." },
            ].map((item, index) => (
              <Col md={4} sm={6} className="mb-4 text-center" key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <i className={`${item.icon} fa-2x mb-3 text-primary`}></i>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;