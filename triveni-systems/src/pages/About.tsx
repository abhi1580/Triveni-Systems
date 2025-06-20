import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import heroVideo from '../assets/images/heroVideo.mp4'; // Placeholder for hero video

const About = () => {
  const coreValues = [
    {
      title: 'Innovation',
      icon: 'fas fa-lightbulb',
      description: 'Creating solutions for complex challenges.',
    },
    {
      title: 'Collaboration',
      icon: 'fas fa-users',
      description: 'Achieving goals through teamwork.',
    },
    {
      title: 'Excellence',
      icon: 'fas fa-star',
      description: 'Delivering unmatched quality.',
    },
    {
      title: 'Integrity',
      icon: 'fas fa-handshake',
      description: 'Building trust with transparency.',
    },
  ];

  const impactMetrics = [
    {
      value: '15+',
      label: 'Projects Delivered',
      icon: 'fas fa-project-diagram',
    },
    {
      value: '15+',
      label: 'Clients',
      icon: 'fas fa-users',
    },
    {
      value: '2+',
      label: 'Years in Business',
      icon: 'fas fa-calendar-alt',
    },
    {
      value: '98%',
      label: 'Client Retention',
      icon: 'fas fa-chart-line',
    },
  ];

  return (
    <div className="about-page">
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
            About Triveni Systems
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Innovating IT with passion and expertise.
          </p>
          <Link
            to="#our-story"
            className="btn btn-primary btn-lg animate__animated animate__fadeIn animate__delay-2s"
          >
            Our Story
          </Link>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision py-5">
        <Container>
          <Row className="justify-content-center">
            {[
              {
                title: 'Our Mission',
                icon: 'fas fa-bullseye',
                text: 'Empowering businesses with cutting-edge technology.',
              },
              {
                title: 'Our Vision',
                icon: 'fas fa-eye',
                text: 'Leading global IT innovation with scalable solutions.',
              },
            ].map((item, idx) => (
              <Col md={6} className="mb-4" key={idx}>
                <div
                  className="mission-vision-card text-center p-4 animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <i className={`${item.icon} fa-2x mb-3`}></i>
                  <h2 className="section-title">{item.title}</h2>
                  <p className="section-text">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Company Story */}
      <section id="our-story" className="story-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Our Journey
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="story-content animate__animated animate__fadeInUp">
                <p className="story-text">
                  Founded in 2020, Triveni Systems started as a small team passionate about tech. Today, we deliver web, mobile, desktop, and digital solutions to clients worldwide, driven by innovation and integrity.
                </p>
                <div className="future-plans mt-4">
                  <h3 className="future-title">Looking Ahead</h3>
                  <p className="future-text">
                    We’re investing in AI, IoT, and cloud solutions to transform industries, with plans for innovation labs and global expansion.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="values-section py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Our Core Values
          </h2>
          <Row>
            {coreValues.map((value, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div
                  className="value-card text-center p-4 animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <i className={`${value.icon} fa-2x mb-3`}></i>
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
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Leadership
          </h2>
          <Row className="justify-content-center">
            {[
              {
                name: 'Abhay Panchal',
                position: 'Founder & CEO',
                description: 'Visionary leader with 5+ years in IT consulting, guiding with innovation.',
              },
              {
                name: 'Vikrant Godbole',
                position: 'Founder & CEO',
                description: 'Tech strategist with 6+ years, driving scalable product development.',
              },
              {
                name: 'Nikhil Shetkar',
                position: 'Operations Manager',
                description: '4+ years ensuring seamless project delivery and efficiency.',
              },
              {
                name: 'Shubham Ghante',
                position: 'HR Manager',
                description: '5+ years fostering positive culture and talent development.',
              },
              {
                name: 'Ravi Nelwade',
                position: 'Technical Lead',
                description: '7+ years mentoring teams and delivering quality solutions.',
              },
              {
                name: 'Shubham Jangam',
                position: 'Project Manager',
                description: '6+ years coordinating teams to meet client goals.',
              },
            ].map((leader, idx) => (
              <Col md={6} className="mb-4" key={idx}>
                <div
                  className="leader-card p-4 animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="leader-info">
                    <h3 className="leader-name">{leader.name}</h3>
                    <p className="leader-position">{leader.position}</p>
                    <p className="leader-description">{leader.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Impact Metrics */}
      <section className="metrics-section py-5">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Our Impact
          </h2>
          <Row>
            {impactMetrics.map((metric, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div
                  className="metric-card text-center p-4 animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <i className={`${metric.icon} fa-2x mb-3`}></i>
                  <h3 className="metric-value">{metric.value}</h3>
                  <p className="metric-label">{metric.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta text-center text-light py-5 bg-dark">
        <Container>
          <h3 className="mb-4 animate__animated animate__fadeIn">
            Work with Us
          </h3>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Let’s connect as a client or candidate.
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

export default About;