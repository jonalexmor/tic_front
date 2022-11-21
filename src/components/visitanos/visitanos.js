import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./visitanos.css"

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <Container id="carrusel-container">
                <h1>Visitanos</h1>
            <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" >
        <Accordion.Header ><h3>Horario</h3></Accordion.Header>
        <Accordion.Body>
        <li class="list-unstyled-item list-hours-item d-flex">
                  <h3>Lunes a vierne - 7:00 a 20:00</h3>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                <h3>Sábados - 9:00 a 17:00</h3>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                <h3> Domingos - Cerrado</h3>
                </li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h3>Dirección</h3></Accordion.Header>
        <Accordion.Body>
        <h1>Calle falsa 123</h1>
               
                  Bogotá - Colombia
               
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
         );
    }
}
 
