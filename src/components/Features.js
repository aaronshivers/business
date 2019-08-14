import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import img from '../images/features-1.jpg'

const Features = () => (
  <Row>
    <Col lg={ 6 }>
      <h2>Modern Business Features</h2>
      <p>The Modern Business template by Start Bootstrap includes:</p>
      <ul>
        <li>
          <strong>Bootstrap v4</strong>
        </li>
        <li>jQuery</li>
        <li>Font Awesome</li>
        <li>Working contact form with validation</li>
        <li>Unstyled page elements for easy customization</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
    </Col>
    <Col lg={ 6 }>
      <Image src={ img } rounded fluid />
    </Col>
  </Row>
)

export default Features
