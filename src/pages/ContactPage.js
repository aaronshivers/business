import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import Heading from '../components/Heading'
import Marketing from '../components/Marketing'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

const ContactPage = () => (
  <Container>
    <Heading heading="contact" subheading="subheading" />
    <BreadcrumbContainer location="contact" />
    <Row>
      <ContactDetails />
      <ContactForm />
    </Row>
  </Container>
)

export default ContactPage
