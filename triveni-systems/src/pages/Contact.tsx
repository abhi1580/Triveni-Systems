import { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../styles/Contact.css';
import heroVideo from '../assets/images/heroVideo.mp4'; // Placeholder for hero video

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      setSuccess('');
      return;
    }
    setSuccess('Your message has been sent successfully!');
    setError('');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero text-center text-light">
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
            Contact Us
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Connect with us for inquiries or support.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="animate__animated animate__fadeIn animate__delay-2s"
          >
            Get a Free Consultation
          </Button>
        </Container>
      </section>

      {/* Contact Form and Details */}
      <section className="contact-section py-5">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Get in Touch
          </h2>
          <Row>
            {/* Contact Form */}
            <Col md={6} className="mb-4">
              <Card
                className="h-100 contact-card animate__animated animate__fadeInUp"
                style={{ animationDelay: '0.2s' }}
              >
                <Card.Body>
                  <i className="fas fa-envelope contact-icon"></i>
                  <h3 className="contact-title">Send a Message</h3>
                  <p className="contact-description">
                    We’ll respond as soon as possible.
                  </p>
                  <Form onSubmit={handleSubmit} aria-label="Contact Form">
                    {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Your name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Your email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        aria-label="Your message"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Details */}
            <Col md={6}>
              <Card
                className="h-100 contact-card animate__animated animate__fadeInUp"
                style={{ animationDelay: '0.4s' }}
              >
                <Card.Body>
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <h3 className="contact-title">Our Location</h3>
                  <p className="contact-description">
                    Reach out or visit us in Pune.
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265156138537!2d73.73497231489234!3d18.59127198737447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e6c4b5e3e7%3A0x3f8b8f8f8f8f8f8f!2sHinjewadi%20Phase%202%2C%20Pune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Triveni Systems Location in Hinjewadi, Pune"
                    aria-label="Map showing Triveni Systems location"
                  ></iframe>

                  <div className="mt-4">
                    <h4 className="contact-title">Contact Info</h4>
                    <p>
                      <i className="fas fa-phone me-2"></i>
                      Phone: +91 9146334963 / 8087992028
                    </p>
                    <p>
                      <i className="fas fa-envelope me-2"></i>
                      Email: helpdesk.trivenisystems@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Address: Hinjewadi Phase 2, Pune, Maharashtra, India
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="contact-title">Business Hours</h4>
                    <ListGroup>
                      <ListGroup.Item>
                        Monday - Friday: 10:00 AM - 6:00 PM
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Saturday: 10:00 AM - 2:00 PM
                      </ListGroup.Item>
                      <ListGroup.Item>Sunday: Closed</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <h3 className="text-center mb-5 animate__animated animate__fadeIn">
            Frequently Asked Questions
          </h3>
          <Row>
            {[
              {
                question: 'How long does it take to get a response?',
                answer: 'We respond within 24-48 hours on business days.',
              },
              {
                question: 'What services do you offer?',
                answer:
                  'We provide web development, mobile apps, desktop applications, digital marketing, and legacy system modernization.',
              },
              {
                question: 'Can I request a custom software solution?',
                answer:
                  'Yes, contact us with your needs for a tailored solution.',
              },
              {
                question: 'Do you support remote collaborations?',
                answer:
                  'Absolutely, we work globally with robust remote practices.',
              },
            ].map((faq, idx) => (
              <Col md={6} key={idx}>
                <Card
                  className="mb-3 faq-card animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <Card.Body>
                    <Card.Title as="h4">{faq.question}</Card.Title>
                    <Card.Text>{faq.answer}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta text-center text-light py-5 bg-dark">
        <Container>
          <h3 className="mb-4 animate__animated animate__fadeIn">
            Start Your Project
          </h3>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Transform your business with our IT solutions.
          </p>
          <Button
            variant="light"
            size="lg"
            className="animate__animated animate__fadeIn animate__delay-2s"
          >
            Get Started
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Contact;