import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div className='nav-bg'>
            <Navbar expand='lg'>
                <Container>
                    <Navbar.Brand as={NavLink} to='/'><h3 className='fw-bold'>QUIZ SAGE</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to='/'><span className='fw-bold fs-6'>Home</span></Nav.Link>
                            <Nav.Link as={NavLink} to='/topics'><span className='fw-bold fs-6'>Topics</span></Nav.Link>
                            <Nav.Link as={NavLink} to='/stastics'><span className='fw-bold fs-6'>Stastics</span></Nav.Link>
                            <Nav.Link as={NavLink} to='/blog'><span className='fw-bold fs-6'>Blog</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
};

export default Header;



