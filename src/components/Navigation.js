import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => (
  <Navbar fixed="top" variant="dark" bg="dark" expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand href="#" className="text-capitalize">
        business
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="text-capitalize ml-auto">
          <Nav.Link href="#about" className="text-capitalize">about</Nav.Link>
          <Nav.Link href="#services" className="text-capitalize">services</Nav.Link>
          <Nav.Link href="#contact" className="text-capitalize">contact</Nav.Link>
          <NavDropdown title="portfolio" className="text-capitalize">
            <NavDropdown.Item href="#portfolio-1-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-2-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-3-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-4-col" className="text-capitalize">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-item" className="text-capitalize">single portfolio item</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="blog" className="text-capitalize">
            <NavDropdown.Item href="#blog-home-1" className="text-capitalize">blog home 1</NavDropdown.Item>
            <NavDropdown.Item href="#blog-home-2" className="text-capitalize">blog home 2</NavDropdown.Item>
            <NavDropdown.Item href="#blog-post" className="text-capitalize">blog post</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="other pages" className="text-capitalize">
            <NavDropdown.Item href="#full-width" className="text-capitalize">full width page</NavDropdown.Item>
            <NavDropdown.Item href="#sidebar" className="text-capitalize">sidebar page</NavDropdown.Item>
            <NavDropdown.Item href="#faq" className="text-uppercase">faq</NavDropdown.Item>
            <NavDropdown.Item href="#404">404</NavDropdown.Item>
            <NavDropdown.Item href="#pricing" className="text-capitalize">pricing table</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
