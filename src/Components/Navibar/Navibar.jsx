import logo from './logo.jpg'
import React from 'react' 
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Navibar = ({logo}) => {
    return (
        <div className='Navbar'>
            <Navbar expand="lg" style={{

                backgroundImage: 'linear-gradient(to right, #BFCFF4, #78B1F8)'
            }} variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Kanban Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="">Tasks</Nav.Link>
                            <NavDropdown title="Filters" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#tags">Filter by tags</NavDropdown.Item>
                                <NavDropdown.Item href="#names">Filter by name</NavDropdown.Item>
                                <NavDropdown.Item href="#date">Filter by date</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="">
                                <NavDropdown title={
                                    <img className='rounded-circle' src={logo} alt="" style={{width:'40px'}} />
                                } id="collasible-nav-dropdown" drop="start">
                                    <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#notifications">Notifications</NavDropdown.Item>
                                    <hr
                                        style={{
                                            backgroundColor:'grey',
                                            height: 1,
                                            width:'85%',
                                            margin:'0 0 0 12px'
                                        }}
                                    />
                                    <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

Navibar.defaultProps = {
    logo: logo
}

export default Navibar