import { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { applicants } from '../data/applicants';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container className="admin-panel py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          <i className="fas fa-user-shield me-2"></i>Admin Panel
        </h2>
        <Button variant="danger" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt me-2"></i>Logout
        </Button>
      </div>
      <h3>Applicants</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={index}>
              <td>{applicant.name}</td>
              <td>{applicant.email}</td>
              <td>{applicant.position}</td>
              <td>
                <a href={applicant.resume} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-pdf me-2"></i>View Resume
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPanel;