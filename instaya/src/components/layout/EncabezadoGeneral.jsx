import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function EncabezadoGeneral() {
  return (
      <Navbar bg="warning" expand="lg">
        <Container id="containerBrand">
          <Navbar.Brand href="/">InstaYA</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="login">Cerrar sesion</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default EncabezadoGeneral;