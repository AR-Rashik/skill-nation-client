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
import { Image } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Header.css';


const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => {

        })
        .catch(error => {
          console.error('Log out error: ', error);
        })
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" className='mb-5'>
        <Container>
          <Link className='text-decoration-none' to='/'><Navbar.Brand className='fw-semibold'><FaCode></FaCode> Skill <span className='bg-dark text-light p-1 rounded'>Nation</span></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='text-center' id="responsive-navbar-nav">
            <Nav
              className="mx-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link><Link className='text-decoration-none text-dark fw-semibold me-5 nav-option' to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-dark fw-semibold me-5 nav-option' to='/courses'>Courses</Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-dark fw-semibold me-5 nav-option' to='/faq'>FAQ</Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-dark fw-semibold me-5 nav-option' to='/blog'>Blog</Link></Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center justify-content-center">
              <Form.Check
                className='me-3'
                type="switch"
                id="custom-switch"
                label=""
              />
              {/* <Nav.Link><Link to='/'>{user?.displayName}</Link></Nav.Link> */}
                {
                  user?.uid ?
                  <>
                      <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                          <Button
                            variant="light"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center"
                          >
                            <Image
                              ref={ref}
                              style={{height: '30px'}}
                              roundedCircle
                              src={user?.photoURL}
                            />
                          </Button>
                        )}
                      </OverlayTrigger>
                    <Button className='fw-semibold ms-3' variant='outline-danger' size='sm' onClick={handleLogOut}>Log out</Button>
                  </>
                  :
                  <Link to='/login'><Button className='fw-semibold' variant="outline-primary" size='sm'>Log in</Button></Link>
                }
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;