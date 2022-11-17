import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function EncabezadoLogin() {
  return (
      <Navbar bg="warning" expand="lg">
        <Container id="containerBrand">
          <Navbar.Brand href="/">InstaYA</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="acercade">Acerca de</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default EncabezadoLogin;