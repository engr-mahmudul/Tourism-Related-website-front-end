import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Container, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';

import './Navigation.css'
import navLogo from '../../images/nav-image/nav-icon.png'
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
    const userIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className='nav-bg py-2 nav-container' sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand >
                        {/* <img src={navLogo} style={{ height: "50px", width: "60px", border: "2px solid white", borderRadius: "50%", padding: "7px" }} alt="" /> */}
                        <span className='font-style' style={{ color: "white", fontWeight: "800", marginLeft: "20px" }}>Traveling World</span>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={HashLink} to="/home" className='text-white' >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className='text-white' >Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageOrders" className='text-white' >Manage Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/addService" className='text-white' >Add Service</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="" >My Orders</Nav.Link> */}

                        {user?.email ?
                            <Nav className='ml-4'>

                                <Nav.Link as={HashLink} to="/myOrders" className='text-white' >My Orders</Nav.Link> <span> <Button onClick={logOut} className='mr-2' style={{ border: 'none', outline: 'none', fontSize: 'larger', backgroundColor: '#8264e6' }}> {userIcon} </Button> <span style={{ color: 'yellow', fontWeight: '700' }}>{user.displayName}</span></span>
                            </Nav> :
                            <Nav.Link as={HashLink} to="/login" className='text-white' >Log in</Nav.Link>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Navigation;