// PaymentPage.js

import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './PaymentPage.css'; // Import your custom CSS file

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handlePayment = async () => {
    
  };

  return (
    <div className="container-1 mt-5">
      <Row>
        <Col>
          <Card className="payment-card p-4">
            <Card.Title className="mb-4">
              <FontAwesomeIcon icon={faCreditCard} className="card-icon" />
              Payment Details
            </Card.Title>
            <Form>
              <Form.Group controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formCardHolderName">
                <Form.Label>Cardholder's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cardholder's name"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formExpiryDate">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCvc">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBillingAddress">
                <Form.Label>Billing Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter billing address"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                />
              </Form.Group>
              <Button variant="danger" onClick={handlePayment} className='paynow'>
                Pay Now
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Subscription Card on the Right */}
        <Col>
          <Card className="subscription-card">
            <Card.Body>
              <Card.Title>ANNUAL PASS</Card.Title>
              <Card.Text>
                Access to UFC events, the entire UFC Fight Library, live martial arts events from around the world, and exclusive original series and shows.
              </Card.Text>
              <ul>
                <li>Over 1,000 hours of live combat sports action from around the globe</li>
                <li>Save 20% compared to the monthly subscription. Recurring payment of $95.88 every year</li>
              </ul>
              <Button variant="primary">Select</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentPage;
