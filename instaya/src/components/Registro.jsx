import '/src/App.css'
import React from 'react'
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap"
import logo from '/images/logo.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import EncabezadoLogin from './layout/EncabezadoLogin'

function Registro() {  
  useEffect(()=>{document.title = "Registro"})
  return (
    <>
      <EncabezadoLogin/>
      <div>
        <Container>
          <Row className="vh-90 d-flex justify-content-center align-items-center" id="login">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-warning"></div>
              <Card className="shadow" >
                <Card.Body>
                  <div className="mb-0 mt-0">
                    <img src={logo} width="146" height="128"/>  
                      <p className=" mb-3">¡¡Por favor, diligencia el formulario de registro!!</p>
                    <div className="mb-1">
                    <Form>
                        <Form.Group className="mb-2" controlId="formBasicName">
                          <Form.Label className="text-center">
                            NOMBRES Y APELLIDOS
                          </Form.Label>
                          <Form.Control 
                          type="text" 
                          placeholder="Ingresa tu nombre completo" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            USUARIO
                          </Form.Label>
                          <Form.Control type="email" placeholder="Ingresa tu Correo Electrónico" />
                        </Form.Group>

                        <Form.Group
                          className="mb-2"
                          //controlId="formBasicPassword"
                        >
                          <Form.Label>CONTRASEÑA</Form.Label>
                          <Form.Control type="password" placeholder="Ingresa tu Contraseña" id="pass1"/>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          //controlId="formBasicPassword"
                        >
                          <Form.Label>CONFIRMACION CONTRASEÑA</Form.Label>
                          <Form.Control type="password" placeholder="Digita nuevamente tu Contraseña" id="pass2"/>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                        </Form.Group>

                        <div className="d-grid">
                          <Button variant="warning" type="submit" onSubmit={()=>verificarPasswords()} //Esta parte de onSubmit y llamado a funcion aun no hace nada
                            >
                                Registrar
                          </Button>
                        </div>
                      </Form>
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
export default Registro

function verificarPasswords() { //Esta funcion aún no hace nada
 
    // Acá va el código 

    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');

    if (pass1.value != pass2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje
        <Alert key="danger" variant="danger">
          Las contraseñas no coinciden!
        </Alert>
     
        return false;
    } else {
        <Alert key="success" variant="success">
          Las contraseñas coinciden!
        </Alert>
        return true
    }
 
}