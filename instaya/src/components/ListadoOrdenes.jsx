import '/src/App.css'
import React from 'react'
import { Col, Button, Row, Container, Card, Form, Table} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import EncabezadoGeneral from './layout/EncabezadoGeneral'

function ListadoOrdenes(){
    useEffect(()=>{document.title = "Listado Ordenes"})
    return(
        <>
            <EncabezadoGeneral/>
            <div className='mt-5'>
                <Container>
                    <Table responsive striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Ciudad Entrega</th>
                            <th>Direccion Entrega</th>
                            <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Cumplido</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Cancelado</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@twitter</td>
                            <td>Guardado</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Cancelado</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    );
}

export default ListadoOrdenes;