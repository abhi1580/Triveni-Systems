import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5 bg-dark">
        <Container>
          <h1>About Triveni Systems</h1>
          <p className="lead">Innovating the future of IT solutions.</p>
        </Container>
      </section>

      <Container className="py-5">
        {/* Mission */}
        <Row className="mb-4">
          <Col>
            <h2>Our Mission</h2>
            <p>
              To empower businesses with cutting-edge technology solutions that drive growth and efficiency.
            </p>
          </Col>
        </Row>

        {/* Vision */}
        <Row className="mb-4">
          <Col>
            <h2>Our Vision</h2>
            <p>
              To be a global leader in IT innovation, delivering sustainable and scalable solutions.
            </p>
          </Col>
        </Row>

        {/* Company Story */}
        <Row className="mb-4">
          <Col>
            <h2>Our Journey</h2>
            <p>
              Founded in 2020, Triveni Systems began as a small team of developers passionate about making a difference in the tech world. Over the years, we've expanded our services across web, mobile, desktop, and digital domains — serving startups to enterprises with agility, integrity, and innovation.
            </p>
          </Col>
        </Row>

        {/* Future Plans */}
        <Row className="mb-4">
          <Col>
            <h2>Our Future</h2>
            <p>
              Looking ahead, we're investing in AI, IoT, and cloud-native solutions to reshape industries and enable smarter, faster business operations. Our roadmap includes opening innovation labs and expanding our global delivery centers.
            </p>
          </Col>
        </Row>

        {/* Our Values */}
        <Row className="mb-4">
          <Col>
            <h2>Our Core Values</h2>
            <Row>
              {[
                {
                  title: 'Innovation',
                  icon: 'fas fa-lightbulb',
                  desc: 'Driving creative solutions for complex challenges.',
                },
                {
                  title: 'Collaboration',
                  icon: 'fas fa-users',
                  desc: 'Working together to achieve shared goals.',
                },
                {
                  title: 'Excellence',
                  icon: 'fas fa-star',
                  desc: 'Striving for the highest quality in everything we do.',
                },
                {
                  title: 'Integrity',
                  icon: 'fas fa-handshake',
                  desc: 'Upholding transparency and trust in all partnerships.',
                },
              ].map((value, i) => (
                <Col md={3} key={i}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>
                        <i className={`${value.icon} me-2`}></i>{value.title}
                      </Card.Title>
                      <Card.Text>{value.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Leadership Section */}
        <Row className="mb-4">
          <Col>
            <h2>Leadership</h2>
            <Row>
              <Col md={6}>
                <Card className="mb-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>Abhay Panchal</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Founder & CEO</Card.Subtitle>
                    <Card.Text>
                      A visionary leader with 5+ years in software engineering and IT consulting. He guides Triveni Systems with innovation and empathy.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>Vikrant Godbole</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Founder & CEO</Card.Subtitle>
                    <Card.Text>
                      A tech strategist driving product architecture, development, and growth through scalable technologies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Impact Metrics */}
        <Row className="mb-4 text-center">
          <h2>Our Impact</h2>
          <Col md={3}>
            <h3 className="text-primary">15+</h3>
            <p>Projects Delivered</p>
          </Col>
          <Col md={3}>
            <h3 className="text-success">15+</h3>
            <p>Clients</p>
          </Col>
          <Col md={3}>
            <h3 className="text-warning">2+</h3>
            <p>Years in Business</p>
          </Col>
          <Col md={3}>
            <h3 className="text-info">98%</h3>
            <p>Client Retention</p>
          </Col>
        </Row>

        {/* CTA Section */}
        <section className="contact-cta text-center py-5 bg-primary text-white rounded mt-5">
          <h3>Want to Work with Us?</h3>
          <p className="mb-3">Whether you're a client or candidate, we’d love to hear from you.</p>
          <Button variant="light">Contact Us</Button>
        </section>
      </Container>
    </div>
  );
};

export default About;
