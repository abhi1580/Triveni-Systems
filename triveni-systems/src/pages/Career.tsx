import { useState } from 'react';
import { Container, Form, Button, Alert, Card, Accordion, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { applicants } from '../data/applicants';
import '../styles/Career.css';
import heroVideo from '../assets/images/heroVideo.mp4'; // Placeholder for hero video

const Career = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [resume, setResume] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
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
      description: 'Develop innovative IT solutions with cutting-edge tech.',
      requirements: ['3+ years experience', 'Strong problem-solving', 'Modern frameworks'],
      icon: 'fas fa-code',
    },
    {
      title: 'Frontend Developer',
      description: 'Craft sleek, responsive user interfaces.',
      requirements: ['2+ years experience', 'React/Angular proficiency', 'Strong CSS'],
      icon: 'fas fa-laptop-code',
    },
    {
      title: 'Backend Developer',
      description: 'Build scalable APIs and services.',
      requirements: ['3+ years experience', 'Node.js/Python expertise', 'Database design'],
      icon: 'fas fa-server',
    },
    {
      title: 'Marketing Analyst',
      description: 'Drive growth with data-driven strategies.',
      requirements: ['2+ years experience', 'Analytics expertise', 'Content strategy'],
      icon: 'fas fa-chart-line',
    },
  ];

  const culturePoints = [
    {
      title: 'Collaboration',
      description: 'We thrive on openness, innovation, and teamwork.',
      icon: 'fas fa-users',
    },
    {
      title: 'Learning',
      description: 'Grow with mentorship and resources.',
      icon: 'fas fa-lightbulb',
    },
    {
      title: 'Balance',
      description: 'We value your time and well-being.',
      icon: 'fas fa-balance-scale',
    },
  ];

  return (
    <div className="career-page">
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
            Join Triveni Systems
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Shape the future with us.
          </p>
          <Link
            to="#open-positions"
            className="btn btn-primary btn-lg animate__animated animate__fadeIn animate__delay-2s"
          >
            View Open Positions
          </Link>
        </Container>
      </section>

      {/* Job & Internship Criteria */}
      <section className="criteria-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Job & Internship Criteria
          </h2>
          <Row>
            {[
              {
                title: 'Web Development',
                icon: 'fas fa-laptop-code',
                jobCriteria: [
                  'Proficiency in HTML, CSS, JavaScript, React/Angular',
                  'Responsive and accessible design',
                  'Portfolio of web projects',
                ],
                internshipCriteria: [
                  'Basic web technology knowledge',
                  'Willingness to learn',
                  'Teamwork skills',
                ],
              },
              {
                title: 'Android Apps',
                icon: 'fab fa-android',
                jobCriteria: [
                  'Java/Kotlin and Android Studio experience',
                  'Play Store deployment knowledge',
                  'Native/hybrid app development',
                ],
                internshipCriteria: [
                  'Basic Android knowledge',
                  'Eagerness to learn',
                  'Problem-solving attitude',
                ],
              },
              {
                title: 'iOS Apps',
                icon: 'fab fa-apple',
                jobCriteria: [
                  'Swift/Objective-C and Xcode proficiency',
                  'iOS frameworks and App Store experience',
                  'Strong UI/UX for Apple',
                ],
                internshipCriteria: [
                  'Basic iOS knowledge',
                  'Interest in mobile apps',
                  'Analytical skills',
                ],
              },
              {
                title: 'Desktop Apps',
                icon: 'fas fa-desktop',
                jobCriteria: [
                  'Experience with Electron, .NET',
                  'Cross-platform development',
                  'Debugging and integration',
                ],
                internshipCriteria: [
                  'Basic programming knowledge',
                  'Interest in desktop apps',
                  'Willingness to learn',
                ],
              },
              {
                title: 'Digital Marketing',
                icon: 'fas fa-bullhorn',
                jobCriteria: [
                  'SEO, SEM, social media experience',
                  'Analytical and content strategy',
                  'Marketing tools proficiency',
                ],
                internshipCriteria: [
                  'Basic marketing knowledge',
                  'Creativity and eagerness',
                  'Communication skills',
                ],
              },
              {
                title: 'Legacy Modernization',
                icon: 'fas fa-sync-alt',
                jobCriteria: [
                  'Code refactoring and upgrades',
                  'Cloud migration and modern stacks',
                  'Legacy system analysis',
                ],
                internshipCriteria: [
                  'Interest in legacy systems',
                  'Basic programming skills',
                  'Motivation to solve challenges',
                ],
              },
            ].map((criteria, idx) => (
              <Col md={6} lg={4} className="mb-4" key={idx}>
                <Card
                  className="h-100 criteria-card animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <Card.Body>
                    <Card.Title>
                      <i className={`${criteria.icon} me-2`}></i>
                      {criteria.title}
                    </Card.Title>
                    <Card.Text>
                      <strong>Job Criteria:</strong>
                      <ul>
                        {criteria.jobCriteria.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <strong>Internship Criteria:</strong>
                      <ul>
                        {criteria.internshipCriteria.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="positions-section py-5">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Open Positions
          </h2>
          <Row>
            {openPositions.map((job, idx) => (
              <Col md={6} key={idx} className="mb-4">
                <Card
                  className="h-100 position-card animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
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
                      Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Culture Section */}
      <section className="culture-section py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Life at Triveni Systems
          </h2>
          <Row>
            {culturePoints.map((point, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <div
                  className="culture-card text-center animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <i className={`${point.icon} fa-2x mb-3`}></i>
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
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Apply Now
          </h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card
                className="apply-card animate__animated animate__fadeInUp"
                style={{ animationDelay: '0.2s' }}
              >
                <Card.Body>
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
                          const target = e.target;
                          if (target.files && target.files[0]) {
                            setResume(target.files[0]);
                          }
                        }}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      Submit Application
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Frequently Asked Questions
          </h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Accordion className="faq-accordion">
                {[
                  {
                    question: 'How can I apply?',
                    answer: 'Fill out the application form above with your resume in PDF format. We’ll review and respond within 2-3 business days.',
                  },
                  {
                    question: 'Do you offer internships?',
                    answer: 'Yes, we offer 3-6 month internships with hands-on project experience. Check this page for openings.',
                  },
                  {
                    question: 'What is the hiring process?',
                    answer: 'Our process includes application screening, technical assessment, and interviews, typically taking 2-3 weeks.',
                  },
                  {
                    question: 'What are the job criteria?',
                    answer: 'We seek relevant education, experience, and problem-solving skills. See specific roles for details.',
                  },
                  {
                    question: 'How to apply for internships?',
                    answer: 'Use the form above, specifying “Internship” in the position field. Openings are posted here.',
                  },
                ].map((faq, idx) => (
                  <Accordion.Item
                    eventKey={idx.toString()}
                    key={idx}
                    className="animate__animated animate__fadeInUp"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <Accordion.Header>
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body>
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta text-center text-light py-5 bg-dark">
        <Container>
          <h3 className="mb-4 animate__animated animate__fadeIn">
            Have Questions?
          </h3>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Reach out to our HR team.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg animate__animated animate__fadeIn animate__delay-2s"
          >
            Contact HR
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Career;