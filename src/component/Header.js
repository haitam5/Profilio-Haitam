import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                
                    <img
                        src='./images/IMG-2421.jpg'
                        height="50"
                        className="d-inline-block align-top"
                        alt="your-logo"
                    />
                    {' '}
                    <strong>Your Portfolio Title</strong>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}

export default Header;