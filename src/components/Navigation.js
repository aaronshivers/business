import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => (
  <Navbar
    fixed="top"
    variant="dark"
    bg="dark"
    expand="lg"
    collapseOnSelect
  >
    <Container>
      <Navbar.Brand as={ Link } to="/" className="text-capitalize">
        business
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="text-capitalize ml-auto">
          <LinkContainer to="/about">
            <Nav.Link className="text-capitalize">about</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
            <Nav.Link className="text-capitalize">services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="text-capitalize">contact</Nav.Link>
          </LinkContainer>
          <NavDropdown title="portfolio" className="text-capitalize">
            <LinkContainer to="/portfolio-1-col">
              <NavDropdown.Item className="text-capitalize">1 column portfolio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/portfolio-2-col">
              <NavDropdown.Item className="text-capitalize">1 column portfolio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/portfolio-3-col">
              <NavDropdown.Item className="text-capitalize">1 column portfolio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/portfolio-4-col">
              <NavDropdown.Item className="text-capitalize">1 column portfolio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/portfolio-item">
              <NavDropdown.Item className="text-capitalize">single portfolio item</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="blog" className="text-capitalize">
            <LinkContainer to="/blog-home-1">
              <NavDropdown.Item className="text-capitalize">blog home 1</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/blog-home-2">
              <NavDropdown.Item className="text-capitalize">blog home 2</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/blog-post">
              <NavDropdown.Item className="text-capitalize">blog post</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="other pages" className="text-capitalize">
            <LinkContainer to="/full-width">
              <NavDropdown.Item className="text-capitalize">full width page</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/sidebar">
              <NavDropdown.Item className="text-capitalize">sidebar page</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/faq">
              <NavDropdown.Item className="text-uppercase">faq</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/404">
              <NavDropdown.Item>404</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <NavDropdown.Item className="text-capitalize">pricing table</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
