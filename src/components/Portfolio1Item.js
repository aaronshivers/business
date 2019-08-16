import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const Portfolio1Item = ({ image, heading, body }) => (
  <>
    <Row>
      <Col md={ 7 }>
        <a href="#">
          <Image src={ image } fluid rounded className="mb-3 mb-md-0" />
        </a>
      </Col>
      <Col md={ 5 }>
        <h3>{ heading }</h3>
        <p>{ body }</p>
        <a href="#" className="btn btn-primary text-capitalize">view project</a>
      </Col>
    </Row>
    <hr />
  </>
)

export default Portfolio1Item
