import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Portfolio2Item = ({ image, heading, body }) => (
  <Col lg={ 6 } className="mb-4">
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

export default Portfolio2Item
