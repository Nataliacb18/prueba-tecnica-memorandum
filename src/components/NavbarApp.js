import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../styles/navbar.css";

export const NavbarApp = () => {
  return (
    <Navbar className='navPpal' bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">DEMO Streaming</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Log in</Nav.Link>
          <Button>Start your free trial</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
