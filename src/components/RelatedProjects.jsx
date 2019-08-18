import React from 'react'
import { Col, Image } from 'react-bootstrap'

const RelatedProjects = ({ image }) => (
  <Col md={3} sm={6} className="mb-4">
    <a href="#">
      <Image src={image} fluid />
    </a>
  </Col>
)

export default RelatedProjects
