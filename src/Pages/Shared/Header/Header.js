import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {

  const {user} = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#"><FaCode></FaCode> skill.Nation</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='text-center' id="responsive-navbar-nav">
            <Nav
              className="mx-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
              <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
              <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center justify-content-center">
              <Form.Check 
                type="switch"
                id="custom-switch"
                label=""
              />
              <Link to='/login'><Button variant="outline-primary">Login</Button></Link>
              <Nav.Link><Link to='/'>{user?.displayName}</Link></Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;