import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

const CardContainer = ({ header, text }) => (
  <Col lg={ 4 } className="mb-4">
    <Card className="h-100">
      <Card.Header as="h4">{ header }</Card.Header>
      <Card.Body>
        <Card.Text>{ text }</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  </Col>
)

export default CardContainer
