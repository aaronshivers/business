import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Breadcrumb, Jumbotron } from 'react-bootstrap'
import Heading from '../components/Heading'

const AboutPage = () => (
  <Container>
    <Heading heading="404" subheading="Page Not Found" />
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item className="text-capitalize">home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>404</Breadcrumb.Item>
    </Breadcrumb>
    <Jumbotron>
      <h1 className="display-1">404</h1>
      <p>The page you're looking for could not be found. Here are some helpful links to get you back on track:</p>
    </Jumbotron>
    <ul>
      <li><Link to="/" className="text-capitalize">home</Link></li>
      <li><Link to="/about" className="text-capitalize">about</Link></li>
      <li><Link to="/services" className="text-capitalize">services</Link></li>
      <li><Link to="/contact" className="text-capitalize">contact</Link></li>
      <li className="text-capitalize">
        portfolio
        <ul>
          <li><Link to="/portfolio-1-col" className="text-capitalize">1 column portfolio</Link></li>
          <li><Link to="/portfolio-2-col" className="text-capitalize">2 column portfolio</Link></li>
          <li><Link to="/portfolio-3-col" className="text-capitalize">3 column portfolio</Link></li>
          <li><Link to="/portfolio-4-col" className="text-capitalize">4 column portfolio</Link></li>
        </ul>
      </li>
      <li className="text-capitalize">
        blog
        <ul>
          <li><Link to="/blog-home-1" className="text-capitalize">blog home 1</Link></li>
          <li><Link to="/blog-home-2" className="text-capitalize">blog home 2</Link></li>
          <li><Link to="/blog-post" className="text-capitalize">blog post</Link></li>
        </ul>
      </li>
      <li className="text-capitalize">
        other pages
        <ul>
          <li><Link to="/full-width-page" className="text-capitalize">full width page</Link></li>
          <li><Link to="/sidebar" className="text-capitalize">sidebar page</Link></li>
          <li><Link to="/faq" className="text-capitalize">faq</Link></li>
          <li><Link to="/404" className="text-capitalize">404 page</Link></li>
          <li><Link to="/pricing-table" className="text-capitalize">pricing table</Link></li>
        </ul>
      </li>
    </ul>
  </Container>
)

export default AboutPage
