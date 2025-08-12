import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 mt-5">
      <Container>
        <Row className="gy-4">
          {/* Left: Brand and Socials */}
          <Col md={6}>
            <h4 className="mb-3"><i className="fas fa-globe me-2"></i>Trip Advisor</h4>
            <p className="text-white-50">
              Your trusted guide for confident, convenient travel planning.
            </p>
            <div className="mt-3">
              <a href="#" className="text-white-50 me-3 footer-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white-50 me-3 footer-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white-50 me-3 footer-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white-50 footer-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>

          <Col md={6}>
            <Row>
              <Col sm={6}>
                <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
                <ul className="list-unstyled text-white-50">
                  <li><a href="#destinations" className="footer-link">Destinations</a></li>
                  <li><a href="#planner" className="footer-link">Trip Planner</a></li>
                  <li><a href="#budget" className="footer-link">Budget Tool</a></li>
                  <li><a href="#testimonials" className="footer-link">Stories</a></li>
                </ul>
              </Col>
              <Col sm={6}>
                <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                <p className="text-white-50 mb-1"><i className="fas fa-envelope me-2"></i> dpm@tripadivisor.com</p>
                <p className="text-white-50 mb-1"><i className="fas fa-phone me-2"></i> +91 9987655632</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className="my-4 bg-secondary" />

        <Row>
          <Col className="text-center">
            <p className="small text-white-50 mb-0">© 2025 Trip Advisor. Crafted for Every Journey 🌍</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
