import React from 'react'
import { Col, Card } from 'react-bootstrap'

const PortfolioItem = ({ image, heading, body }) => (
  <Col lg={ 4 } sm={ 6 } className="mb-4">
    <Card className="h-100">
      <a href="#">
        <Card.Img src={ image } variant="top" />
      </a>
      <Card.Body>
        <Card.Title as="h5">
          <a href="#" className="text-decoration-none">{ heading }</a>
        </Card.Title>
        <Card.Text>{ body }</Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

export default PortfolioItem
