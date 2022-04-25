import { Navbar, Container, Nav } from 'react-bootstrap'
import '../Header/Header.css'

function Header() {
  return (
    <Navbar bg="light" expand="lg" className='px-3 bg-white'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div className="first">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </div>
          <div className="second">
            <Nav.Link href="#link">Espanol</Nav.Link>
            <Nav.Link href="#link">Ingles</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;