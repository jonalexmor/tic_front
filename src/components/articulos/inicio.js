import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./articulos.css";
import ArticulosBuscar from "./crud/buscar";
import ArticulosCrear from "./crud/crear";
import ArticulosEditar from "./crud/editar";

export default class Articulos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
      _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdArticulo = this.setIdArticulo.bind(this);
    this.getIdArticulo = this.getIdArticulo.bind(this);

  }
  setIdArticulo(id) {
    this.setState({ _id: id});
}

getIdArticulo() {
    return this.state._id;
}

  changeTab(tab) {
    this.setState({ currentTab: tab });
  }
  render() {
    return (
      <Container id="articulos-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "buscar" ? (
            <ArticulosBuscar 
            changeTab={this.changeTab}
            setIdArticulo={this.setIdArticulo}
            />
          ) : this.state.currentTab === 'crear' ? (
            <ArticulosCrear changeTab={this.changeTab} />
          ): (
            <ArticulosEditar 
            changeTab={this.changeTab}
            getIdArticulo={this.getIdArticulo}/>
            )}
        </Row>
      </Container>
    );
  }
}
