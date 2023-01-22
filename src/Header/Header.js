import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdAirplanemodeActive } from "react-icons/md";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark"  className=' fs-4' style={{textDecoration:'none'}}>
            <Container className='text-light'>
                <Navbar.Brand href="#home"> <MdAirplanemodeActive className='w-22' /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link > 
                            <Link style={{textDecoration:'none'}} to='/'>Home</Link> 
                        </Nav.Link>
                        <Nav.Link > 
                            <Link style={{textDecoration:'none'}} to='/news'>News</Link> 
                        </Nav.Link>
                        <Nav.Link >
                            <Link style={{textDecoration:'none'}} to='/destination'>Destination</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link style={{textDecoration:'none'}} to='/blog'>Blog</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link style={{textDecoration:'none'}} to='/contact'>Contact</Link>
                        </Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Login</Nav.Link>
                        <Nav.Link  href="#memes">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;