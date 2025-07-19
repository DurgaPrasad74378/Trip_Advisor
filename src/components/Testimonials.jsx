import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The AI suggestions saved me hours of research. I got a perfect trip plan within minutes!",
      name: "Puspal Das",
      location: "Kolkata, West Bengal",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      quote: "As a solo traveler, this app made it easy and stress-free to explore new places. Loved it!",
      name: "Durga Prasad Maharana",
      location: "Pune, Maharashtra",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      quote: "I was amazed how accurately it matched my preferences and budget. Totally recommend it!",
      name: "Amit Kumar",
      location: "Bhubaneswar, Odisha",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f3e3', fontFamily: "'Georgia', serif" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark border-bottom pb-2 d-inline-block" style={{ borderColor: '#b66d3f' }}>
            Travelers Love AI Trip Genius
          </h2>
          <p className="text-muted fst-italic">Hear what our happy users have to say</p>
        </div>
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.id}>
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: '#fffbe6', borderRadius: '16px', border: '2px solid #e1c699' }}>
                <Card.Body className="p-4">
                  <div className="mb-3 text-warning">
                    <i className="fas fa-quote-left fa-2x opacity-50"></i>
                  </div>
                  <Card.Text className="mb-4 fst-italic text-dark">"{testimonial.quote}"</Card.Text>
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.image}
                      className="rounded-circle me-3 border border-warning"
                      width="50"
                      height="50"
                      alt={testimonial.name}
                    />
                    <div>
                      <h6 className="mb-0 text-dark">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.location}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
