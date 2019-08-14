import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

const MarketingItem = ({ heading, body }) => (
  <Col lg={ 4 } className="mb-4">
    <Card className="h-100">
      <Card.Header>{ heading }</Card.Header>
      <Card.Body>
        <Card.Text>{ body }</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  </Col>
)

export default MarketingItem
