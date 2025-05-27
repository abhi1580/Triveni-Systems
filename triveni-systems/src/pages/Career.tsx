import { useState } from 'react';
import { Container, Form, Button, Alert, Card, Accordion, Row, Col } from 'react-bootstrap';
import { applicants } from '../data/applicants';
import '../styles/Career.css';

const Career = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !position || !resume) {
      setError('Please fill in all fields');
      return;
    }
    applicants.push({
      name,
      email,
      position,
      resume: URL.createObjectURL(resume),
    });
    setSuccess('Application submitted successfully!');
    setError('');
    setName('');
    setEmail('');
    setPosition('');
    setResume(null);
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5 bg-dark">
        <Container>
          <h1>Join Triveni Systems</h1>
          <p className="lead">Explore career opportunities and grow with us.</p>
        </Container>
      </section>

      {/* Open Positions */}
      <Container className="py-5">
        <h2 className="mb-4">Open Positions</h2>
        <Row>
          {[
            { title: 'Software Engineer', desc: 'Develop innovative IT solutions.' },
            { title: 'Frontend Developer', desc: 'Create sleek user interfaces.' },
            { title: 'Backend Developer', desc: 'Build robust APIs and services.' },
            { title: 'Digital Marketing Analyst', desc: 'Drive engagement and growth.' },
          ].map((job, idx) => (
            <Col md={6} key={idx}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>{job.desc}</Card.Text>
                  <Button variant="outline-primary">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Culture Section */}
        <section className="culture-section py-5 bg-light mt-5">
          <h2 className="text-center mb-4">Life at Triveni Systems</h2>
          <Row>
            <Col md={4}>
              <h5><i className="fas fa-users me-2 text-primary"></i>Collaborative Environment</h5>
              <p>We foster a culture of openness, innovation, and teamwork.</p>
            </Col>
            <Col md={4}>
              <h5><i className="fas fa-lightbulb me-2 text-warning"></i>Continuous Learning</h5>
              <p>Grow your skills with mentorship and ongoing learning resources.</p>
            </Col>
            <Col md={4}>
              <h5><i className="fas fa-balance-scale me-2 text-success"></i>Work-Life Balance</h5>
              <p>We value your time and believe in a healthy work-life balance.</p>
            </Col>
          </Row>
        </section>

        {/* Apply Form */}
        <h2 className="mt-5">Apply Now</h2>
        <Form onSubmit={handleSubmit} className="mt-3">
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
          <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formResume">
            <Form.Label>Resume (PDF Only)</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf"
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.files && target.files[0]) {
                  setResume(target.files[0]);
                }
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            <i className="fas fa-paper-plane me-2"></i>Submit Application
          </Button>
        </Form>

        {/* FAQ Section */}
        <section className="faq-section py-5 mt-5">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can I apply?</Accordion.Header>
              <Accordion.Body>
                Simply fill out the application form above and submit your resume in PDF format.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do you offer internships?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer internship opportunities throughout the year. Keep an eye on this page for open roles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What is the hiring process?</Accordion.Header>
              <Accordion.Body>
                Our hiring process includes application screening, a technical assessment, and interviews with our team.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="contact-cta text-center text-white py-5 bg-primary mt-5 rounded">
          <Container>
            <h3>Have Questions?</h3>
            <p className="mb-3">Reach out to our HR team and we’ll be happy to help.</p>
            <Button variant="light">Contact HR</Button>
          </Container>
        </section>
      </Container>
    </div>
  );
};

export default Career;
