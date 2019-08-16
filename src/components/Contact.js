import React from 'react'
import { Col } from 'react-bootstrap'

const Contact = () => (
  <Col lg={ 4 } className="mb-4">
    <h3 className="text-capitalize">contact details</h3>
    <p className="text-capitalize">
      3481 Melrose Place
      <br />
      Beverly Hills, CA 90210
    </p>
    <p className="text-capitalize">
      <abbr title="phone">p</abbr>: (123) 456-7890
    </p>
    <p>
      <abbr title="email" className="text-capitalize">
        e
      </abbr>: <a href="mailto:name@example.com">
        name@example.com
      </a>
    </p>
    <p className="text-capitalize">
      <abbr title="hours">H</abbr>: monday - friday: 9:00 AM to 5:00 PM
    </p>
  </Col>
)

export default Contact
