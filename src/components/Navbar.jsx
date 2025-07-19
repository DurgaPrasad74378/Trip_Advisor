import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: '#2c2c2c',
        borderBottom: '2px solid #888',
        fontFamily: 'Georgia, serif',
      }}
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          href="#"
          style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#f5f5f5' }}
        >
          <i className="fas fa-route me-2"></i>AI Trip Genius
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#" active style={{ fontSize: '1rem', color: '#ddd' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#features" style={{ fontSize: '1rem', color: '#ddd' }}>
              Features
            </Nav.Link>
            <Nav.Link href="#destinations" style={{ fontSize: '1rem', color: '#ddd' }}>
              Destinations
            </Nav.Link>
            <Nav.Link href="#planner" style={{ fontSize: '1rem', color: '#ddd' }}>
              Trip Planner
            </Nav.Link>
            <Nav.Link href="#contact" style={{ fontSize: '1rem', color: '#ddd' }}>
              Contact
            </Nav.Link>
          </Nav>

          <Button
            variant="outline-light"
            className="ms-3"
            style={{
              borderRadius: 0,
              fontWeight: 'bold',
              borderColor: '#ccc',
              backgroundColor: 'transparent',
              color: '#eee',
            }}
          >
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
