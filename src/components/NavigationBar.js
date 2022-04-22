import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const NavigationBar = ()=>{

    return(
        <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as = {Link} to="/">2bPrecise</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as = {Link} to="/employees">Employees</Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
export default NavigationBar;