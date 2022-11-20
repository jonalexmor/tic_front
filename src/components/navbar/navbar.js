import React from "react";
import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
  Row,
  
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie/es6";
import "./navbar.css";

const cookies = new Cookies();

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout(){
    cookies.remove("_s");
    window.location.reload();
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="danger" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda Tecnologica TIC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/index">Inicio</Nav.Link>
              <Nav.Link href="/about">Historia</Nav.Link>
              <Nav.Link href="/services">Servicios</Nav.Link>
              <Nav.Link href="/store">Visitanos</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/empleados">Empleados</Nav.Link>
              <Nav.Link href="/articulos">Articulos</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario" variant="warning">
              <Dropdown.Header id="dropdown-header">
                <Row>
                <FontAwesomeIcon icon={faUserGear} />
                </Row>
                <Row>
                  **ADMIN TIENDA TIC**
                </Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
                </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
