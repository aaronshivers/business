import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Portfolio4Item = ({ image, heading, body }) => (
  <Col lg={ 3 } md={ 4 } sm={ 6 } className="mb-4">
    <Card className="h-100">
      <a href="#">
        <Card.Img src={ image } variant="top" />
      </a>
      <Card.Body>
        <Card.Title as="h4">
          <a href="#" className="text-decoration-none text-primary">{ heading }</a>
        </Card.Title>
        <Card.Text>{ body }</Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

export default Portfolio4Item
