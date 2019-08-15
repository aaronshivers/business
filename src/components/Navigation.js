import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => (
  <Navbar fixed="top" variant="dark" bg="dark" expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand as={ Link } to="/" className="text-capitalize">
        business
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="text-capitalize ml-auto">
          <Nav.Link as={ Link } to="/about" className="text-capitalize">about</Nav.Link>
          <Nav.Link as={ Link } to="/services" className="text-capitalize">services</Nav.Link>
          <Nav.Link as={ Link } to="/contact" className="text-capitalize">contact</Nav.Link>
          <NavDropdown title="portfolio" className="text-capitalize">
            <NavDropdown.Item as={ Link } to="/portfolio-1-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/portfolio-2-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/portfolio-3-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/portfolio-4-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/portfolio-item" className="text-capitalize">single portfolio item</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="blog" className="text-capitalize">
            <NavDropdown.Item as={ Link } to="/blog-home-1" className="text-capitalize">blog home 1</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/blog-home-2" className="text-capitalize">blog home 2</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/blog-post" className="text-capitalize">blog post</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="other pages" className="text-capitalize">
            <NavDropdown.Item as={ Link } to="/full-width" className="text-capitalize">full width page</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/sidebar" className="text-capitalize">sidebar page</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/faq" className="text-uppercase">faq</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/404">404</NavDropdown.Item>
            <NavDropdown.Item as={ Link } to="/pricing" className="text-capitalize">pricing table</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
