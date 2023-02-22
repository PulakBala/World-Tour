import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdAirplanemodeActive } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Authcontext } from '../UserContext/UserContext';


const Header = () => {
    const  {user, logOut} = useContext(Authcontext);

    const handleLogOut =()=>{
        logOut()
        .then(() =>{})
        .catch(error=> console.error(error))
    }
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
                        <Nav.Link  href="#memes">
                            {
                                user?.uid?
                                <>
                                    <span>{user?.displayName}</span>
                                    <button onClick={handleLogOut}>Log out</button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Sign Up</Link>
                                </>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;