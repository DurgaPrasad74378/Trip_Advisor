import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetCalculator = () => {
  const [formData, setFormData] = useState({
    destination: '',
    duration: '1 week',
    travelStyle: 'Mid-range',
    budget: 2750
  });

  const [chartData, setChartData] = useState({
    labels: ['Flights', 'Accommodation', 'Food', 'Activities', 'Transport', 'Misc'],
    datasets: [{
      data: [962, 825, 413, 330, 138, 83],
      backgroundColor: [
        '#0F4C81',
        '#FF7F50',
        '#6B8E23',
        '#9370DB',
        '#20B2AA',
        '#A9A9A9'
      ],
      borderWidth: 0
    }]
  });

  useEffect(() => {
    const calculateDistribution = () => {
      const percentages = [0.35, 0.30, 0.15, 0.12, 0.05, 0.03];
      return percentages.map(p => Math.round(formData.budget * p));
    };
    
    setChartData(prev => ({
      ...prev,
      datasets: [{
        ...prev.datasets[0],
        data: calculateDistribution()
      }]
    }));
  }, [formData.budget]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'budget' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Budget calculated successfully!');
  };

  return (
    <section className="py-5" id="budget-calculator">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4">Smart Budget Calculator</h2>
            <p className="text-muted mb-4">
              See how your budget breaks down across different travel categories
            </p>
            <div style={{ height: '300px' }}>
              <Doughnut 
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: '#6C757D',
                        font: {
                          family: "'Nunito', sans-serif",
                          size: 14
                        },
                        padding: 20
                      }
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          return `$${context.raw} (${Math.round(context.parsed)}%)`;
                        }
                      }
                    }
                  },
                  cutout: '65%'
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h5 className="card-title mb-4">Estimate Your Trip Costs</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                      type="text"
                      name="destination"
                      placeholder="Where are you going?"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Trip Duration</Form.Label>
                    <Form.Select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                    >
                      <option value="3-5 days">3-5 days</option>
                      <option value="1 week">1 week</option>
                      <option value="2 weeks">2 weeks</option>
                      <option value="1 month">1 month</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Travel Style</Form.Label>
                    <Form.Select
                      name="travelStyle"
                      value={formData.travelStyle}
                      onChange={handleChange}
                    >
                      <option value="Budget">Budget</option>
                      <option value="Mid-range">Mid-range</option>
                      <option value="Luxury">Luxury</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>
                      Total Budget: <strong>${formData.budget}</strong>
                    </Form.Label>
                    <Form.Range
                      name="budget"
                      min="500"
                      max="10000"
                      step="100"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                    <div className="d-flex justify-content-between text-muted small mt-1">
                      <span>$500</span>
                      <span>$10,000</span>
                    </div>
                  </Form.Group>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2"
                  >
                    Calculate Budget
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BudgetCalculator;
