import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  const coreValues = [
    {
      title: 'Innovation',
      icon: 'fas fa-lightbulb',
      description: 'Driving creative solutions for complex challenges.',
      color: 'primary'
    },
    {
      title: 'Collaboration',
      icon: 'fas fa-users',
      description: 'Working together to achieve shared goals.',
      color: 'success'
    },
    {
      title: 'Excellence',
      icon: 'fas fa-star',
      description: 'Striving for the highest quality in everything we do.',
      color: 'warning'
    },
    {
      title: 'Integrity',
      icon: 'fas fa-handshake',
      description: 'Upholding transparency and trust in all partnerships.',
      color: 'info'
    }
  ];

  const impactMetrics = [
    {
      value: '15+',
      label: 'Projects Delivered',
      icon: 'fas fa-project-diagram',
      color: 'primary'
    },
    {
      value: '15+',
      label: 'Clients',
      icon: 'fas fa-users',
      color: 'success'
    },
    {
      value: '2+',
      label: 'Years in Business',
      icon: 'fas fa-calendar-alt',
      color: 'warning'
    },
    {
      value: '98%',
      label: 'Client Retention',
      icon: 'fas fa-chart-line',
      color: 'info'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5">
        
        <Container>
          <h1 className="display-4 fw-bold">About Triveni Systems</h1>
          <p className="lead mb-4">Innovating the future of IT solutions with passion and expertise.</p>
          <Link to="#our-story" className="btn btn-primary btn-lg">
            <i className="fas fa-scroll me-2"></i>Our Story
          </Link>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="mb-4">
              <div className="mission-card text-center p-4">
                <i className="fas fa-bullseye fa-3x mb-3 text-primary"></i>
                <h2 className="section-title">Our Mission</h2>
                <p className="section-text">
                  To empower businesses with cutting-edge technology solutions that drive growth and efficiency.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="vision-card text-center p-4">
                <i className="fas fa-eye fa-3x mb-3 text-primary"></i>
                <h2 className="section-title">Our Vision</h2>
                <p className="section-text">
                  To be a global leader in IT innovation, delivering sustainable and scalable solutions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story */}
      <section id="our-story" className="story-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Journey</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="story-content">
                <p className="story-text">
                  Founded in 2020, Triveni Systems began as a small team of developers passionate about making a difference in the tech world. Over the years, we've expanded our services across web, mobile, desktop, and digital domains — serving startups to enterprises with agility, integrity, and innovation.
                </p>
                <div className="future-plans mt-4">
                  <h3 className="future-title">Looking Ahead</h3>
                  <p className="future-text">
                    Looking ahead, we're investing in AI, IoT, and cloud-native solutions to reshape industries and enable smarter, faster business operations. Our roadmap includes opening innovation labs and expanding our global delivery centers.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="values-section py-5 bg-gray">
        <Container>
          <h2 className="text-center mb-5">Our Core Values</h2>
          <Row>
            {coreValues.map((value, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className="value-card text-center p-4">
                  <i className={`${value.icon} fa-2x mb-3 text-${value.color}`}></i>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Leadership */}
      <section className="leadership-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Leadership</h2>
          <Row className="justify-content-center">
            <Col md={6} className="mb-4">
              <div className="leader-card p-4">
                <div className="leader-info">
                  <h3 className="leader-name">Abhay Panchal</h3>
                  <p className="leader-position">Founder & CEO</p>
                  <p className="leader-description">
                    A visionary leader with 5+ years in software engineering and IT consulting. He guides Triveni Systems with innovation and empathy.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="leader-card p-4">
                <div className="leader-info">
                  <h3 className="leader-name">Vikrant Godbole</h3>
                  <p className="leader-position">Founder & CEO</p>
                  <p className="leader-description">
                    A tech strategist driving product architecture, development, and growth through scalable technologies.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Metrics */}
      <section className="metrics-section py-5">
        <Container>
          <h2 className="text-center mb-5">Our Impact</h2>
          <Row>
            {impactMetrics.map((metric, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className="metric-card text-center p-4">
                  <i className={`${metric.icon} fa-2x mb-3 text-${metric.color}`}></i>
                  <h3 className="metric-value">{metric.value}</h3>
                  <p className="metric-label">{metric.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta text-center text-white py-5 mb-0">
        <Container>
          <h3 className="mb-4">Want to Work with Us?</h3>
          <p className="lead mb-4">Whether you're a client or candidate, we'd love to hear from you.</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            <i className="fas fa-envelope me-2"></i>Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default About;
