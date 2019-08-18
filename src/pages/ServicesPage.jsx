import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Heading from '../components/Heading'
import Marketing from '../components/Marketing'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import img1 from '../images/services-1.jpg'

const ServicesPage = () => (
  <Container>
    <Heading heading="services" subheading="subheading" />
    <BreadcrumbContainer location="services" />
    <Image src={img1} fluid rounded className="mb-4" />
    <Marketing />
  </Container>
)

export default ServicesPage
