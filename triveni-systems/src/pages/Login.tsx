import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Dummy validation
    if (email === 'test@triveni.com' && password === 'password') {
      login();
      setError('');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page bg-gray">
      <Container>
        <div className="login-container">
          <Card className="login-card">
            <Card.Body>
              <div className="text-center mb-4">
                <h2 className="login-title">
                  <i className="fas fa-lock me-2"></i>Welcome Back
                </h2>
                <p className="login-subtitle">Please sign in to continue</p>
              </div>
              
              {error && (
                <Alert variant="danger" className="login-alert">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="login-input"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="login-input"
                    />
                  </div>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" className="login-button">
                    <i className="fas fa-sign-in-alt me-2"></i>Sign In
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-4">
                <p className="login-footer">
                  Don't have an account? Contact administrator
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Login;