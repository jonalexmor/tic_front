import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../articulos.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class ArticulosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      articulo: {
        id: "",
        nombre: "",
        categoria: "",
        tipo: "",
        inventario: "",
        novedad: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);

  }
  setValue(inicio, value) {
    this.setState({
      articulo: {
        ...this.state.articulo,
        [inicio]: value,
      },
    });
  }
  guardarArticulos() {
    this.setState({ loading: true });
    request
      .post("/articulos", this.state.articulo)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }
  onExitedMessage () {
    if (this.state.rediret) this.props.changeTab( 'buscar' );
  }
  render() {
    return (
      <Container id="articulos-crear-container">
        <MessagePrompt
        text={this.state.message.text}
        show={this.state.message.show}
        duration={2500}
        onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Crear Articulos</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>ID</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("id", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("categoria", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("tipo", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Inventario</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("inventario", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Novedad</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("novedad", e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => console.log(this.guardarArticulos())}
            >
              Guardar articulo
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
