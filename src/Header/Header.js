import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdAirplanemodeActive } from "react-icons/md";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark"  className=' fs-4'>
            <Container className='text-light'>
                <Navbar.Brand href="#home"> <MdAirplanemodeActive className='w-22' /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav eventKey={2} className="me-auto">
                        <Nav.Link href="#features">News</Nav.Link>
                        <Nav.Link href="#pricing">Destination</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;