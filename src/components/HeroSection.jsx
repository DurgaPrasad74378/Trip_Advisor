import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <header
      className="hero-section d-flex align-items-center py-5"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f0e1',
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">
              Discover & Plan <br /> Your <span className="text-primary">Perfect Getaway</span>
            </h1>
            <p className="lead text-muted mb-4">
              Discover destinations and itineraries that fit your budget and travel style.
            </p>

            <div className="search-box bg-white p-4 rounded shadow-sm">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder="Where to?" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Budget</Form.Label>
                    <Form.Select>
                      <option>Any</option>
                      <option>Economy (₹)</option>
                      <option>Mid-range (₹₹)</option>
                      <option>Luxury (₹₹₹)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Duration</Form.Label>
                    <Form.Select>
                      <option>Weekend</option>
                      <option>1 Week</option>
                      <option>2 Weeks</option>
                      <option>1 Month+</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button className="w-100 py-2 mt-2" variant="primary">
                    Generate My Trip Plan
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right Image */}
          <Col lg={6} className="text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFwfGVufDB8fDB8fHww"
              alt="Zanskar Valley, Ladakh"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeroSection;
