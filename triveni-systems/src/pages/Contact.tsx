import { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState('');
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      setNewsletterError('Please enter your email for newsletter subscription');
      setNewsletterSuccess('');
      return;
    }
    setNewsletterSuccess('Thank you for subscribing to our newsletter!');
    setNewsletterError('');
    setNewsletterEmail('');
  };

  return (
    <>
      <section className="hero-section text-center text-light py-5 bg-dark">
        <Container>
          <h1>Contact Triveni Systems</h1>
          <p className="lead">We'd love to hear from you. Get in touch!</p>
        </Container>
      </section>

      <Container className="contact-page py-5">
        <h2 className="text-center mb-4">
          <i className="fas fa-envelope me-2"></i>Contact Us
        </h2>
        <Row>
          {/* Contact Form */}
          <Col md={6}>
            <h3>Send Us a Message</h3>
            <Form onSubmit={handleSubmit}>
              {success && <Alert variant="success">{success}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                <i className="fas fa-paper-plane me-2"></i>Send Message
              </Button>
            </Form>
          </Col>

          {/* Contact Details & Map */}
          <Col md={6}>
            <h3>Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019020324142!2d-122.419415684681!3d37.77492977975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815e9c6c6b7d%3A0x3b1e7e8f9c6e8f7d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Triveni Systems Location"
            ></iframe>

            <h3 className="mt-4">Contact Info</h3>
            <p><i className="fas fa-phone me-2"></i>Phone: +91 9146334963 / 8087992028</p>
            <p><i className="fas fa-envelope me-2"></i>Email: helpdesk.trivenisystems@gmail.com</p>
            <p><i className="fas fa-map-marker-alt me-2"></i>Address: Hinjewadi Phase 2, Pune, Maharashtra, India</p>

            <h3 className="mt-4">Business Hours</h3>
            <ListGroup>
              <ListGroup.Item>Monday - Friday: 10:00 AM - 6:00 PM</ListGroup.Item>
              <ListGroup.Item>Sunday: Closed</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* FAQ Section */}
        <section className="faq-section mt-5">
          <h3>Frequently Asked Questions</h3>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>How long does it take to get a response?</Card.Title>
                  <Card.Text>We typically respond within 24-48 hours on business days.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>What services do you offer?</Card.Title>
                  <Card.Text>
                    We offer web development, mobile app development, desktop applications, digital marketing, and modernization of legacy systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Can I request a custom software solution?</Card.Title>
                  <Card.Text>Absolutely! Contact us with your requirements and we will provide a tailored solution.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Do you support remote collaborations?</Card.Title>
                  <Card.Text>Yes, we work with clients globally and have robust remote communication practices.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Contact;
