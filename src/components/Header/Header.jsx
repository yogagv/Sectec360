import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './header.css'


const Header = () => {
  return (
    <div>
        
        <div className='seclayout text-center fixed-top xs-4'> 
            <p> <span> <BiSolidOffer /> </span>
              Upto 75% Offer for Cybersecurity Solutions!</p>
              </div>
              <hr/>

              <Navbar expand="lg xs" className="bg-body-tertiary xs-4 navbar-left">
          <Container>
            <Navbar.Brand>
                <img src={logo} alt="logo" className='w-50 h-30 img'/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav xs-4"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto fw-bold">
                <Nav.Link as={Link} to="/">
                Home
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus">
                About
                </Nav.Link>
                <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/cybersecurity">CyberSecurity
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/firewallservices">
                Firewall
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ITservices">IT Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/webdevelopment">
                WebDevelopment
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" id="collapsible-nav-dropdown fw-normal">
              <NavDropdown.Item as={Link} to="/cybersecurity">CyberSecurity
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/crmmanagement">
                CRM Management
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital transformation">Digital Transformation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/itsolution">
                IT Solution
              </NavDropdown.Item>
            </NavDropdown>
                <Nav.Link as={Link} to="/testimonials">
                Testimonials
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       

    </div>
  )
}

export default Header