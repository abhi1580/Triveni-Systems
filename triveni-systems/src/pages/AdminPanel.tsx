import { useContext, useState } from 'react';
import { Container, Table, Button, Nav, Card, Col, Row, Form, ProgressBar } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { applicants } from '../data/applicants';
import '../styles/AdminPanel.css';

// Define interfaces for type safety
interface Applicant {
  name: string;
  email: string;
  position: string;
  resume: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ServiceRequest {
  id: number;
  type: string;
  status: 'Open' | 'Closed';
  date: string;
}

// Define Employee interface
interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}

// Define Project interface
interface Project {
  id: number;
  name: string;
  status: 'On Hold' | 'In Progress' | 'Completed';
  progress: number; // percentage
  deadline: string;
}

// Define Payment interface
interface Payment {
  id: number;
  projectId: number;
  projectName: string;
  amount: number;
  status: 'Pending' | 'Paid' | 'Overdue';
  dueDate: string;
}

// Mock data for new sections
const contacts: Contact[] = [
  { id: 1, name: 'Alice Brown', email: 'alice@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Bob Wilson', email: 'bob@example.com', phone: '098-765-4321' },
];

const serviceRequests: ServiceRequest[] = [
  { id: 1, type: 'Technical Support', status: 'Open', date: '2025-06-18' },
  { id: 2, type: 'Account Issue', status: 'Closed', date: '2025-06-17' },
];

// Mock data for employees
const initialEmployees: Employee[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@triveni.com', position: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@triveni.com', position: 'Designer' },
];

// Mock data for projects
const initialProjects: Project[] = [
  { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 75, deadline: '2025-08-01' },
  { id: 2, name: 'Mobile App Development', status: 'Completed', progress: 100, deadline: '2025-07-15' },
  { id: 3, name: 'API Integration', status: 'On Hold', progress: 20, deadline: '2025-09-01' },
];

// Mock data for payments
const initialPayments: Payment[] = [
  { id: 1, projectId: 1, projectName: 'Website Redesign', amount: 5000, status: 'Paid', dueDate: '2025-07-20' },
  { id: 2, projectId: 2, projectName: 'Mobile App Development', amount: 8000, status: 'Paid', dueDate: '2025-07-10' },
  { id: 3, projectId: 3, projectName: 'API Integration', amount: 3500, status: 'Pending', dueDate: '2025-08-15' },
];

const AdminPanel: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'applicants' | 'contacts' | 'services' | 'employees' | 'projects' | 'payments'>('dashboard');
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '', position: '' });
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [newProject, setNewProject] = useState<{ name: string; status: 'On Hold' | 'In Progress' | 'Completed'; progress: number; deadline: string; }>({ name: '', status: 'In Progress', progress: 0, deadline: '' });
  const [payments, setPayments] = useState<Payment[]>(initialPayments);
  const [newPayment, setNewPayment] = useState<{ projectId: number, amount: number, status: 'Pending' | 'Paid' | 'Overdue', dueDate: string }>({ projectId: 1, amount: 0, status: 'Pending', dueDate: '' });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.email && newEmployee.position) {
      setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
      setNewEmployee({ name: '', email: '', position: '' });
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProject.name && newProject.deadline) {
      setProjects([...projects, { ...newProject, id: projects.length + 1, progress: Number(newProject.progress) }]);
      setNewProject({ name: '', status: 'In Progress', progress: 0, deadline: '' });
    }
  };

  const handleAddPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPayment.projectId && newPayment.amount && newPayment.dueDate) {
      const project = projects.find(p => p.id === Number(newPayment.projectId));
      if (project) {
        setPayments([...payments, {
          ...newPayment,
          id: payments.length + 1,
          projectName: project.name,
          amount: Number(newPayment.amount)
        }]);
        setNewPayment({ projectId: 1, amount: 0, status: 'Pending', dueDate: '' });
      }
    }
  };

  return (
    <Container className="admin-panel py-5 mt-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          <i className="fas fa-user-shield me-2"></i>Admin Panel
        </h2>
        <Button variant="danger" onClick={handleLogout} className="logout-btn">
          <i className="fas fa-sign-out-alt me-2"></i>Logout
        </Button>
      </div>

      {/* Navigation Tabs */}
      <Nav variant="tabs" defaultActiveKey="dashboard" className="mb-4">
        <Nav.Item>
          <Nav.Link
            eventKey="dashboard"
            onClick={() => setActiveTab('dashboard')}
            className={activeTab === 'dashboard' ? 'active' : ''}
          >
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="applicants"
            onClick={() => setActiveTab('applicants')}
            className={activeTab === 'applicants' ? 'active' : ''}
          >
            Applicants
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="contacts"
            onClick={() => setActiveTab('contacts')}
            className={activeTab === 'contacts' ? 'active' : ''}
          >
            Contact Info
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="services"
            onClick={() => setActiveTab('services')}
            className={activeTab === 'services' ? 'active' : ''}
          >
            Service Requests
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="employees"
            onClick={() => setActiveTab('employees')}
            className={activeTab === 'employees' ? 'active' : ''}
          >
            Employees
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="projects"
            onClick={() => setActiveTab('projects')}
            className={activeTab === 'projects' ? 'active' : ''}
          >
            Project Progress
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="payments"
            onClick={() => setActiveTab('payments')}
            className={activeTab === 'payments' ? 'active' : ''}
          >
            Payments
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Content */}
      {activeTab === 'dashboard' && (
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <h3 className="mb-4">Dashboard</h3>
            <Row>
              <Col md={4}>
                <Card className="mb-3 shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Total Applicants</Card.Title>
                    <Card.Text className="display-6 text-primary">{applicants.length}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Open Service Requests</Card.Title>
                    <Card.Text className="display-6 text-primary">
                      {serviceRequests.filter((sr) => sr.status === 'Open').length}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Total Contacts</Card.Title>
                    <Card.Text className="display-6 text-primary">{contacts.length}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Total Employees</Card.Title>
                    <Card.Text className="display-6 text-primary">{employees.length}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Projects In Progress</Card.Title>
                    <Card.Text className="display-6 text-primary">
                      {projects.filter(p => p.status === 'In Progress').length}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Total Revenue</Card.Title>
                    <Card.Text className="display-6 text-success">
                      ₹{payments.filter(p => p.status === 'Paid').reduce((acc, p) => acc + p.amount, 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}

      {activeTab === 'applicants' && (
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <h3 className="mb-4">Applicants</h3>
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
                {applicants.map((applicant: Applicant, index: number) => (
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
          </Card.Body>
        </Card>
      )}

      {activeTab === 'contacts' && (
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <h3 className="mb-4">Contact Info</h3>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact: Contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {activeTab === 'services' && (
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <h3 className="mb-4">Service Requests</h3>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {serviceRequests.map((request: ServiceRequest) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.type}</td>
                    <td>{request.status}</td>
                    <td>{request.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {activeTab === 'employees' && (
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <h3 className="mb-4">Manage Employees</h3>
            
            {/* Add Employee Form */}
            <Card className="mb-4 shadow-sm border-0 rounded-3">
              <Card.Body>
                <h4 className="mb-3">Add New Employee</h4>
                <Form onSubmit={handleAddEmployee}>
                  <Row className="align-items-end">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter name" 
                          value={newEmployee.name}
                          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter email" 
                          value={newEmployee.email}
                          onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Position</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter position" 
                          value={newEmployee.position}
                          onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button variant="primary" type="submit" className="w-100">Add</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>

            {/* Employee List */}
            <h4 className="mb-3">Employee List</h4>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee: Employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.position}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {activeTab === 'projects' && (
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <h3 className="mb-4">Project Progress</h3>

            {/* Add Project Form */}
            <Card className="mb-4 shadow-sm border-0 rounded-3">
              <Card.Body>
                <h4 className="mb-3">Add New Project</h4>
                <Form onSubmit={handleAddProject}>
                  <Row className="align-items-end">
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter project name" 
                          value={newProject.name}
                          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                          value={newProject.status}
                          onChange={(e) => setNewProject({ ...newProject, status: e.target.value as 'On Hold' | 'In Progress' | 'Completed' })}
                        >
                          <option>On Hold</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Progress (%)</Form.Label>
                        <Form.Control 
                          type="number" 
                          placeholder="Enter progress" 
                          value={newProject.progress}
                          onChange={(e) => setNewProject({ ...newProject, progress: parseInt(e.target.value) || 0 })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control 
                          type="date" 
                          value={newProject.deadline}
                          onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button variant="primary" type="submit" className="w-100">Add</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>

            {/* Project List */}
            <h4 className="mb-3">Project List</h4>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project: Project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.status}</td>
                    <td>
                      <ProgressBar 
                        now={project.progress} 
                        label={`${project.progress}%`} 
                        variant={project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'info' : 'warning'}
                      />
                    </td>
                    <td>{project.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {activeTab === 'payments' && (
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <h3 className="mb-4">Project Payments</h3>

            {/* Payment Summary */}
            <Row className="mb-4">
              <Col md={4}>
                <Card className="shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Project Amount</Card.Title>
                    <Card.Text className="display-6 text-primary">
                      ₹{payments.reduce((acc, p) => acc + p.amount, 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Paid</Card.Title>
                    <Card.Text className="display-6 text-success">
                      ₹{payments.filter(p => p.status === 'Paid').reduce((acc, p) => acc + p.amount, 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm border-0 rounded-3">
                  <Card.Body>
                    <Card.Title>Pending</Card.Title>
                    <Card.Text className="display-6 text-warning">
                      ₹{payments.filter(p => p.status === 'Pending' || p.status === 'Overdue').reduce((acc, p) => acc + p.amount, 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Add Payment Form */}
            <Card className="mb-4 shadow-sm border-0 rounded-3">
              <Card.Body>
                <h4 className="mb-3">Add New Payment</h4>
                <Form onSubmit={handleAddPayment}>
                  <Row className="align-items-end">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Project</Form.Label>
                        <Form.Select
                          value={newPayment.projectId}
                          onChange={(e) => setNewPayment({ ...newPayment, projectId: Number(e.target.value) })}
                          required
                        >
                          {projects.map(project => (
                            <option key={project.id} value={project.id}>{project.name}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Amount (₹)</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter amount"
                          value={newPayment.amount}
                          onChange={(e) => setNewPayment({ ...newPayment, amount: Number(e.target.value) })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                          value={newPayment.status}
                          onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value as 'Pending' | 'Paid' | 'Overdue' })}
                          required
                        >
                          <option>Pending</option>
                          <option>Paid</option>
                          <option>Overdue</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={newPayment.dueDate}
                          onChange={(e) => setNewPayment({ ...newPayment, dueDate: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button variant="primary" type="submit" className="w-100">Add</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>

            {/* Payment List */}
            <h4 className="mb-3">Payment List</h4>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Project Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment: Payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.projectName}</td>
                    <td>₹{payment.amount.toFixed(2)}</td>
                    <td>
                      <span className={`badge bg-${payment.status === 'Paid' ? 'success' : payment.status === 'Pending' ? 'warning' : 'danger'}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td>{payment.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default AdminPanel;