import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';


const text_decoration_none = {
    textDecoration: 'none',
    color: 'black'
}

function NavbarComp() {
    const navigate = useNavigate()


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={text_decoration_none} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link><Link style={text_decoration_none} to={'/about'}>About</Link></Nav.Link>
            <Nav.Link><Link style={text_decoration_none} to={'/contact'}>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;