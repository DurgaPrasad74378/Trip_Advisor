import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('Any');

  const destinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Paris, France',
      description: 'Romantic getaway with iconic landmarks and exquisite cuisine.',
      price: 'From ₹220000',
      budget: '₹₹₹',
      budgetClass: 'success'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1606857090627-27ca46667290?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Ladakh, India',
      description: 'Ladakh is known for its stunning landscapes and Pangong Lake.',
      price: 'From ₹8000',
      budget: '₹',
      budgetClass: 'warning text-dark'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Tokyo, Japan',
      description: 'Futuristic city blending cutting-edge technology with ancient traditions.',
      price: 'From ₹150000',
      budget: '₹₹₹',
      budgetClass: 'success'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1589779677460-a15b5b5790ce?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Maldives',
      description: 'Maldives is known for its white-sand beaches, clear waters, and overwater villas.',
      price: 'From ₹60000',
      budget: '₹₹',
      budgetClass: 'info'
    }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBudget = budgetFilter === 'Any' || 
      (budgetFilter === 'Economy (₹)' && destination.budget === '₹') ||
      (budgetFilter === 'Mid-range (₹₹)' && destination.budget === '₹₹') ||
      (budgetFilter === 'Luxury (₹₹₹)' && destination.budget === '₹₹₹');
    
    return matchesSearch && matchesBudget;
  });

  return (
    <section id="destinations" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Popular Destinations</h2>
          <p className="lead text-muted">Top picks based on current trends and user preferences</p>
        </div>

        <Row className="mb-4">
          <Col md={6}>
            <input
              type="text"
              className="form-control"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <select
              className="form-select"
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
            >
              <option>Any</option>
              <option>Economy (₹)</option>
              <option>Mid-range (₹₹)</option>
              <option>Luxury (₹₹₹)</option>
            </select>
          </Col>
        </Row>

        <Row className="g-4">
          {filteredDestinations.map(destination => (
            <Col md={6} lg={3} key={destination.id}>
              <Card className="destination-card border-0 shadow-sm h-100">
                <Card.Img variant="top" src={destination.image} alt={destination.title} />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">{destination.title}</Card.Title>
                    <Badge bg={destination.budgetClass}>{destination.budget}</Badge>
                  </div>
                  <Card.Text className="text-muted small">{destination.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">{destination.price}</span>
                    <Button variant="outline-primary" size="sm">Explore</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="primary" className="px-4">View All Destinations</Button>
        </div>
      </Container>
    </section>
  );
};

export default Destinations;
