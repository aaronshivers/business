import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'

const Team = ({ image, name, position, text, email }) => (
  <Col lg={ 4 } className="mb-4">
    <Card className="text-center h-100">
      <Card.Img variant="top" src={ image } />
      <Card.Body>
        <Card.Title as="h4" className="text-capitalize">{ name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-capitalize">{ position }</Card.Subtitle>
        <Card.Text>{ text }</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href={ `mailto:${ email }` }>{ email }</a>
      </Card.Footer>
    </Card>
  </Col>
)

export default Team
