import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-robot',
      title: 'Smart Trip Recommendations',
      description: 'Get personalized destination suggestions based on your interests, budget, and travel history.',
      color: 'primary'
    },
    {
      icon: 'fas fa-calculator',
      title: 'Budget Calculator',
      description: 'Plan your expenses with our smart budget tracker that suggests cost-saving alternatives.',
      color: 'success'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Smart Itinerary',
      description: 'Automatically generated day-by-day plans with optimal routes and timing between activities.',
      color: 'info'
    }
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Smart Travel Features</h2>
          <p className="lead text-muted">AI-powered tools to make your trip planning effortless</p>
        </div>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className={`feature-icon bg-${feature.color} bg-opacity-10 text-${feature.color} rounded-circle p-3 mb-4 mx-auto`}>
                    <i className={`${feature.icon} fa-2x`}></i>
                  </div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
