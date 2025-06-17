import { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../styles/Contact.css';

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
      <section className="contact-hero text-center text-light py-5">
        <Container>
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mb-4">Get in touch with our team for any inquiries or support.</p>
          <Button variant="primary" size="lg">
            <i className="fas fa-headset me-2"></i>Get a Free Consultation
          </Button>
        </Container>
      </section>

      {/* Contact Form and Details */}
      <section className="contact-section">
        <Container>
          <h2 className="text-center mb-5">Get in Touch</h2>
          <Row>
            {/* Contact Form */}
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm contact-card">
                <Card.Body>
                  <i className="fas fa-envelope contact-icon"></i>
                  <h3 className="contact-title">Send Us a Message</h3>
                  <p className="contact-description">Fill out the form below and we'll get back to you as soon as possible.</p>
                  <Form onSubmit={handleSubmit} aria-label="Contact Form">
                    {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Your name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
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
                      <i className="fas fa-paper-plane me-2"></i>Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Details */}
            <Col md={6}>
              <Card className="h-100 shadow-sm contact-card">
                <Card.Body>
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <h3 className="contact-title">Our Location</h3>
                  <p className="contact-description">Visit us at our office or get in touch through any of the following channels.</p>
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
                    <p><i className="fas fa-phone me-2"></i>Phone: +91 9146334963 / 8087992028</p>
                    <p><i className="fas fa-envelope me-2"></i>Email: helpdesk.trivenisystems@gmail.com</p>
                    <p><i className="fas fa-map-marker-alt me-2"></i>Address: Hinjewadi Phase 2, Pune, Maharashtra, India</p>
                  </div>

                  <div className="mt-4">
                    <h4 className="contact-title">Business Hours</h4>
                    <ListGroup>
                      <ListGroup.Item>Monday - Friday: 10:00 AM - 6:00 PM</ListGroup.Item>
                      <ListGroup.Item>Saturday: 10:00 AM - 2:00 PM</ListGroup.Item>
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
      <section className="faq-section">
        <Container>
          <h3 className="text-center mb-5">Frequently Asked Questions</h3>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title as="h4">How long does it take to get a response?</Card.Title>
                  <Card.Text>We typically respond within 24-48 hours on business days.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title as="h4">What services do you offer?</Card.Title>
                  <Card.Text>
                    We offer web development, mobile app development, desktop applications, digital marketing, and modernization of legacy systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title as="h4">Can I request a custom software solution?</Card.Title>
                  <Card.Text>Absolutely! Contact us with your requirements, and we will provide a tailored solution.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title as="h4">Do you support remote collaborations?</Card.Title>
                  <Card.Text>Yes, we work with clients globally and have robust remote communication practices.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta text-center text-white">
        <Container>
          <h3 className="mb-4">Ready to Start Your Project?</h3>
          <p className="lead mb-4">Let's discuss how we can help transform your business with our IT solutions.</p>
          <Button variant="light" size="lg">
            <i className="fas fa-paper-plane me-2"></i>Get Started
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Contact;