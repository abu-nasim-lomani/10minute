import React, { useState } from 'react';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import logo from '../../../../images/2022-black.png';
import { FaBars, FaSignInAlt } from "react-icons/fa";

import './NavbarTop.css'

function NavbarTop() {
    const [navbar, setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY>=20){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <Navbar className={navbar ? 'active': 'inactive'}   expand="lg"  style={{ width: "100%", position:'fixed', zIndex:'5'}}  variant=''>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle><FaBars></FaBars></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-padding">
                        <Nav.Link href="#features" className='nav-hover'>ক্লাস ১-১২</Nav.Link>
                        <Nav.Link href="#pricing" className='nav-hover'>ভর্তি পরীক্ষা</Nav.Link>
                        <Nav.Link href="#deets" className='nav-hover'>কোর্স সমূহ</Nav.Link>
                        <Nav.Link href="#deets" className='nav-hover'>বুক স্টোর</Nav.Link>
                    </Nav>
                    <Nav>
                        
                    <Button variant="" className='loginbtn'><FaSignInAlt/> Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTop;