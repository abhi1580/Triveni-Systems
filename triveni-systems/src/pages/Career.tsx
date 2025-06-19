import { useState } from 'react';
import { Container, Form, Button, Alert, Card, Accordion, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

  const openPositions = [
    {
      title: 'Software Engineer',
      description: 'Develop innovative IT solutions using cutting-edge technologies.',
      requirements: ['3+ years of experience', 'Strong problem-solving skills', 'Experience with modern frameworks'],
      icon: 'fas fa-code'
    },
    {
      title: 'Frontend Developer',
      description: 'Create sleek and responsive user interfaces with modern design principles.',
      requirements: ['2+ years of experience', 'Proficiency in React/Angular', 'Strong CSS skills'],
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Backend Developer',
      description: 'Build robust APIs and services with scalable architecture.',
      requirements: ['3+ years of experience', 'Node.js/Python expertise', 'Database design skills'],
      icon: 'fas fa-server'
    },
    {
      title: 'Digital Marketing Analyst',
      description: 'Drive engagement and growth through data-driven marketing strategies.',
      requirements: ['2+ years of experience', 'Analytics expertise', 'Content strategy skills'],
      icon: 'fas fa-chart-line'
    }
  ];

  const culturePoints = [
    {
      title: 'Collaborative Environment',
      description: 'We foster a culture of openness, innovation, and teamwork.',
      icon: 'fas fa-users',
      color: 'primary'
    },
    {
      title: 'Continuous Learning',
      description: 'Grow your skills with mentorship and ongoing learning resources.',
      icon: 'fas fa-lightbulb',
      color: 'warning'
    },
    {
      title: 'Work-Life Balance',
      description: 'We value your time and believe in a healthy work-life balance.',
      icon: 'fas fa-balance-scale',
      color: 'success'
    }
  ];

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5">
        
        <Container>
          <h1 className="display-4 fw-bold">Join Triveni Systems</h1>
          <p className="lead mb-4">Explore exciting career opportunities and grow with us.</p>
          <Link to="#open-positions" className="btn btn-primary btn-lg">
            <i className="fas fa-briefcase me-2"></i>View Open Positions
          </Link>
        </Container>
      </section>

      {/* Job & Internship Criteria by Service */}
      <section className="criteria-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Job & Internship Criteria</h2>
          <Row>
            {/* Web Development */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title><i className="fas fa-laptop-code me-2"></i>Web Development</Card.Title>
                  <Card.Text>
                    <strong>Job Criteria:</strong>
                    <ul>
                      <li>Proficiency in HTML, CSS, JavaScript, and modern frameworks (React, Angular, etc.).</li>
                      <li>Experience with responsive and accessible web design.</li>
                      <li>Portfolio of completed web projects.</li>
                    </ul>
                    <strong>Internship Criteria:</strong>
                    <ul>
                      <li>Basic understanding of web technologies.</li>
                      <li>Willingness to learn and contribute to real projects.</li>
                      <li>Good communication and teamwork skills.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Android App Development */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title><i className="fab fa-android me-2"></i>Android App Development</Card.Title>
                  <Card.Text>
                    <strong>Job Criteria:</strong>
                    <ul>
                      <li>Experience with Java/Kotlin and Android Studio.</li>
                      <li>Knowledge of app deployment and Play Store guidelines.</li>
                      <li>Ability to build and maintain native/hybrid apps.</li>
                    </ul>
                    <strong>Internship Criteria:</strong>
                    <ul>
                      <li>Basic knowledge of Android development.</li>
                      <li>Eagerness to learn mobile app development.</li>
                      <li>Team player with problem-solving attitude.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* iOS App Development */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title><i className="fab fa-apple me-2"></i>iOS App Development</Card.Title>
                  <Card.Text>
                    <strong>Job Criteria:</strong>
                    <ul>
                      <li>Proficiency in Swift/Objective-C and Xcode.</li>
                      <li>Experience with iOS frameworks and App Store deployment.</li>
                      <li>Strong UI/UX design sense for Apple platforms.</li>
                    </ul>
                    <strong>Internship Criteria:</strong>
                    <ul>
                      <li>Basic understanding of iOS development.</li>
                      <li>Interest in building mobile applications.</li>
                      <li>Good analytical and learning skills.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Desktop Applications */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title><i className="fas fa-desktop me-2"></i>Desktop Applications</Card.Title>
                  <Card.Text>
                    <strong>Job Criteria:</strong>
                    <ul>
                      <li>Experience with desktop app frameworks (Electron, .NET, etc.).</li>
                      <li>Ability to develop cross-platform solutions.</li>
                      <li>Strong debugging and integration skills.</li>
                    </ul>
                    <strong>Internship Criteria:</strong>
                    <ul>
                      <li>Basic programming knowledge.</li>
                      <li>Interest in desktop software development.</li>
                      <li>Willingness to learn new technologies.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Digital Marketing */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title><i className="fas fa-bullhorn me-2"></i>Digital Marketing</Card.Title>
                  <Card.Text>
                    <strong>Job Criteria:</strong>
                    <ul>
                      <li>Experience with SEO, SEM, and social media campaigns.</li>
                      <li>Strong analytical and content strategy skills.</li>
                      <li>Ability to use marketing tools and analytics platforms.</li>
                    </ul>
                    <strong>Internship Criteria:</strong>
                    <ul>
                      <li>Basic understanding of digital marketing concepts.</li>
                      <li>Creativity and eagerness to learn marketing strategies.</li>
                      <li>Good written and verbal communication.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Modernization of Legacy Systems */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title><i className="fas fa-sync-alt me-2"></i>Legacy System Modernization</Card.Title>
                  <Card.Text>
                    <strong>Job Criteria:</strong>
                    <ul>
                      <li>Experience with code refactoring and system upgrades.</li>
                      <li>Knowledge of cloud migration and modern tech stacks.</li>
                      <li>Ability to analyze and improve legacy systems.</li>
                    </ul>
                    <strong>Internship Criteria:</strong>
                    <ul>
                      <li>Interest in learning about legacy and modern systems.</li>
                      <li>Basic programming and analytical skills.</li>
                      <li>Motivation to solve real-world tech challenges.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="positions-section py-5">
        <Container>
          <h2 className="text-center mb-5">Open Positions</h2>
          <Row>
            {openPositions.map((job, idx) => (
              <Col md={6} key={idx} className="mb-4">
                <Card className="h-100 shadow-sm position-card">
                  <Card.Body>
                    <Card.Title className="position-title">
                      <i className={`${job.icon} me-2`}></i>
                      {job.title}
                    </Card.Title>
                    <Card.Text className="position-description">{job.description}</Card.Text>
                    <div className="requirements-list mb-3">
                      {job.requirements.map((req, index) => (
                        <div key={index} className="requirement-item">
                          <i className="fas fa-check-circle me-2"></i>
                          {req}
                        </div>
                      ))}
                    </div>
                    <Button variant="primary" className="w-100">
                      <i className="fas fa-paper-plane me-2"></i>Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Culture Section */}
      <section className="culture-section py-5 bg-gray">
        <Container>
          <h2 className="text-center mb-5">Life at Triveni Systems</h2>
          <Row>
            {culturePoints.map((point, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <div className="culture-card text-center p-4">
                  <i className={`${point.icon} fa-2x mb-3 text-${point.color}`}></i>
                  <h5 className="culture-title">{point.title}</h5>
                  <p className="culture-description">{point.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Apply Form */}
      <section className="apply-section py-5">
        <Container>
          <h2 className="text-center mb-5">Apply Now</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
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
                    <Form.Group className="mb-3" controlId="formPosition">
                      <Form.Label>Position</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formResume">
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
                    <Button variant="primary" type="submit" className="w-100">
                      <i className="fas fa-paper-plane me-2"></i>Submit Application
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-gray">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Accordion className="shadow-sm">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <i className="fas fa-question-circle me-2"></i>
                    How can I apply?
                  </Accordion.Header>
                  <Accordion.Body>
                    Simply fill out the application form above and submit your resume in PDF format. Our team will review your application and get back to you within 2-3 business days.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <i className="fas fa-graduation-cap me-2"></i>
                    Do you offer internships?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer internship opportunities throughout the year. Keep an eye on this page for open roles. Our internships typically last 3-6 months and provide hands-on experience with real projects.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <i className="fas fa-tasks me-2"></i>
                    What is the hiring process?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our hiring process includes application screening, a technical assessment, and interviews with our team. The entire process typically takes 2-3 weeks, and we keep candidates informed at every step.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <i className="fas fa-clipboard-check me-2"></i>
                    What are the criteria for job applications?
                  </Accordion.Header>
                  <Accordion.Body>
                    We look for candidates with relevant educational background, required experience for the position, and strong problem-solving skills. Specific criteria are listed under each open position. Passion for learning and teamwork are highly valued.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <i className="fas fa-user-graduate me-2"></i>
                    How can I apply for an internship?
                  </Accordion.Header>
                  <Accordion.Body>
                    Internship opportunities are posted on this page when available. To apply, fill out the application form above and mention 'Internship' in the position field. We welcome students and recent graduates eager to gain hands-on experience.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta text-center text-white py-5 mb-0">
        <Container>
          <h3 className="mb-4">Have Questions?</h3>
          <p className="lead mb-4">Reach out to our HR team and we'll be happy to help.</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            <i className="fas fa-envelope me-2"></i>Contact HR
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Career;
