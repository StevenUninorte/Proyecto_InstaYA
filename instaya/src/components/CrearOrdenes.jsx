import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import EncabezadoGeneral from './layout/EncabezadoGeneral';

function CrearOrdenes() {
    useEffect(()=>{document.title = "Crear Ordenes"})
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
        <EncabezadoGeneral/>
        <Container>
            <Row className="d-flex justify-content-center align-items-center" id="login">
                <Col lg={8}>
                    <Card className="shadow" >
                    <h3>Creación de orden</h3>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}  controlId="validationCustom01">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ingresar la fecha en formato x"    //Definir formato                             
                            />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ingresar hora en formato militar"                                
                            />
                            </Form.Group>
                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Ancho</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Ancho"
                                aria-label="Ancho"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Largo</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Largo"
                                aria-label="Largo"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Alto</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Alto"
                                aria-label="Alto"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Peso</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Peso"
                                aria-label="Peso"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">Kg</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección de Recogida</Form.Label>
                            <Form.Control type="text" placeholder="Direccion de recogida" required />                            
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Ciudad de Recogida</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad de recogida" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Nombre del destinatario</Form.Label>
                            <Form.Control type="text" placeholder="Nombre del destinatario" required />                            
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Cédula/Nit del Destinatario</Form.Label>
                            <Form.Control type="text" placeholder="Identificacion del destinatario (sin puntos)" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección de Entrega</Form.Label>
                            <Form.Control type="text" placeholder="Direccion de entrega" required />                            
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Ciudad de Entrega</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad de entrega" required />
                            </Form.Group>
                        </Row>
                        <Button variant="warning" type="submit">Crear Orden</Button>
                        </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default CrearOrdenes