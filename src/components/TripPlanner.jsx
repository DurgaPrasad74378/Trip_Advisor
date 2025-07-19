import { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge, Button } from 'react-bootstrap';

const TripPlanner = () => {
  const [itinerary] = useState([
    {
      day: 1,
      title: 'Arrival & Local Sightseeing',
      activities: [
        { time: '09:00 AM', name: 'Leh Palace', duration: '1.5h' },
        { time: '11:00 AM', name: 'Shanti Stupa', duration: '1h' },
        { time: '01:00 PM', name: 'Lunch at Lamayuru Restaurant', duration: '1h' },
        { time: '03:00 PM', name: 'Local Market Visit', duration: '2h' }
      ]
    },
    {
      day: 2,
      title: 'Scenic Adventure Day',
      activities: [
        { time: '08:00 AM', name: 'Drive to Pangong Lake', duration: '5h' },
        { time: '01:30 PM', name: 'Explore Pangong Lake', duration: '2h' },
        { time: '04:00 PM', name: 'Tea at Spangmik Village', duration: '1h' }
      ]
    },
    {
      day: 3,
      title: 'Cultural Exploration',
      activities: [
        { time: '09:00 AM', name: 'Thiksey Monastery', duration: '2h' },
        { time: '12:00 PM', name: 'Hemis Monastery', duration: '2h' },
        { time: '03:00 PM', name: 'Stok Palace Museum', duration: '1.5h' }
      ]
    }
  ]);

  const calculateTotalDuration = (activities) => {
    return `${activities.length} activities`;
  };

  return (
    <section id="planner" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4">Build Your Perfect Ladakh Itinerary</h2>
            <p className="lead text-muted mb-4">Our AI-powered trip planner creates optimized schedules based on your preferences and constraints.</p>
            <ul className="list-unstyled">
              <li className="mb-3"><i className="fas fa-check-circle text-primary me-2"></i> Automatic activity scheduling</li>
              <li className="mb-3"><i className="fas fa-check-circle text-primary me-2"></i> Real-time travel time calculations</li>
              <li className="mb-3"><i className="fas fa-check-circle text-primary me-2"></i> Budget-aware recommendations</li>
              <li className="mb-3"><i className="fas fa-check-circle text-primary me-2"></i> Personalized pace adjustment</li>
            </ul>
            <Button variant="primary" className="mt-3">Start Planning Now</Button>
          </Col>
          <Col lg={6}>
            <Card className="border-0 shadow">
              <Card.Header className="bg-white">
                <h5 className="mb-0">Sample Itinerary: Ladakh in 3 Days</h5>
              </Card.Header>
              <Card.Body>
                {itinerary.map((day, index) => (
                  <div className="itinerary-day mb-4" key={index}>
                    <h6 className="d-flex justify-content-between align-items-center">
                      <span>Day {day.day}: {day.title}</span>
                      <Badge bg="primary">{calculateTotalDuration(day.activities)}</Badge>
                    </h6>
                    <ListGroup variant="flush">
                      {day.activities.map((activity, idx) => (
                        <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                          <span>{activity.time} - {activity.name}</span>
                          <Badge bg="light" text="dark">{activity.duration}</Badge>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TripPlanner;
