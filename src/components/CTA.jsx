import { Container, Button } from 'react-bootstrap';

const CTA = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="cta-box p-5 text-center">
          <h2 className="fw-bold mb-3">Begin Your Journey Today</h2>
          <Button variant="light" size="lg" className="px-4 me-2">Get Started</Button>
          <Button variant="outline-light" size="lg" className="px-4">Learn More</Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;