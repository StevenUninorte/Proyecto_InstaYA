import '/src/App.css'
import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap"
import logo from '/images/logo.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {  

  return (
    <>
      <div>
        <Container>
          <Row className="vh-90 d-flex justify-content-center align-items-center" id="login">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-warning"></div>
              <Card className="shadow" >
                <Card.Body>
                  <div className="mb-0 mt-0">
                    <img src={logo} width="146" height="128"/>  
                      <p className=" mb-3">¡Por favor, introduce tu usuario y contraseña!!</p>
                    <div className="mb-1">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            USUARIO
                          </Form.Label>
                          <Form.Control type="email" placeholder="Ingresa tu Correo Electrónico" />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>CONTRASEÑA</Form.Label>
                          <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="warning" type="submit">
                            Ingresar
                          </Button>
                        </div>
                      </Form>
                    <div className="mt-3">
                        <p className="mb-0  text-center">
                        Si no estas registrado?{" "}
                          <a href="{''}" className="text-warning fw-bold">
                          Crea una cuenta
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div> 
    </> 
  );
}
export default Login