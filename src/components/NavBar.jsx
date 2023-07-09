import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function NavBar() {

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={"md"} className="mb-3" sticky='top'>
        <Container fluid>
          <Navbar.Brand className='mx-5' as={Link} to="/"><img src="https://imagizer.imageshack.com/img924/7554/L24ehj.png" width="90" height="90" alt="logo" /> Distribuidora</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" style={{ marginRight: '50%', fontSize: '1.2rem' }}>
                <Nav.Link as={Link} to="/" style={{ color: 'rgb(0, 140, 0)', fontWeight: 'bold' }}>Productos</Nav.Link>
                <Nav.Link as={Link} to="/orders" style={{ color: 'rgb(0, 140, 0)', fontWeight: 'bold' }}>Compras</Nav.Link>
                <Button style={{ backgroundColor: 'lightblue', color: 'green', fontWeight: 'bold', position: 'relative', left: '80%' }} as={Link} to="/cart"><CartWidget /></Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;