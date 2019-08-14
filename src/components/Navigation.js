import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => (
  <Navbar variant="dark" bg="dark" expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand href="#" className="text-uppercase">
        business
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="text-uppercase">
          <Nav.Link href="#about" className="text-uppercase">about</Nav.Link>
          <Nav.Link href="#services" className="text-uppercase">services</Nav.Link>
          <Nav.Link href="#contact" className="text-uppercase">contact</Nav.Link>
          <NavDropdown title="portfolio" className="text-uppercase">
            <NavDropdown.Item href="#portfolio-1-col" className="text-uppercase">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-2-col" className="text-uppercase">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-3-col" className="text-uppercase">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-4-col" className="text-uppercase">1 column portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio-item" className="text-uppercase">single portfolio item</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="blog" className="text-uppercase">
            <NavDropdown.Item href="#blog-home-1" className="text-uppercase">blog home 1</NavDropdown.Item>
            <NavDropdown.Item href="#blog-home-2" className="text-uppercase">blog home 2</NavDropdown.Item>
            <NavDropdown.Item href="#blog-post" className="text-uppercase">blog post</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="other pages" className="text-uppercase">
            <NavDropdown.Item href="#full-width" className="text-uppercase">full width page</NavDropdown.Item>
            <NavDropdown.Item href="#sidebar" className="text-uppercase">sidebar page</NavDropdown.Item>
            <NavDropdown.Item href="#faq" className="text-capitalize">faq</NavDropdown.Item>
            <NavDropdown.Item href="#404">404</NavDropdown.Item>
            <NavDropdown.Item href="#pricing" className="text-uppercase">pricing table</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
