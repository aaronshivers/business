import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import Heading from '../components/Heading'
import Marketing from '../components/Marketing'
import Contact from '../components/Contact'

const ContactPage = () => (
  <Container>
    <Heading heading="contact" subheading="subheading" />
    <BreadcrumbContainer location="contact" />
    <Row>
      <Contact />
    </Row>
  </Container>
)

export default ContactPage
