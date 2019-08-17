import React from 'react'
import { Card } from 'react-bootstrap'

const Blog1Item = ({ image, heading, body }) => (
  <Card className="mb-4">
    <Card.Img src={ image } variant="top" />
    <Card.Body>
      <Card.Title as="h2">{ heading }</Card.Title>
      <Card.Text>{ body }</Card.Text>
      <a href="#" className="btn btn-primary text-capitalize">read more →</a>
    </Card.Body>
    <Card.Footer className="text-muted text-capitalize">
      posted on august 16, 2019 by <a href="#" className="text-capitalize">aaron shivers</a>
    </Card.Footer>
  </Card>
)

export default Blog1Item
