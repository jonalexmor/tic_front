import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../articulos.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class ArticulosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idArticulo : this.props.getIdArticulo(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation:{
        title:"Modificar Articulo",
        text: "¿Desea modificar el articulo?",
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  setValue(inicio, value) {
    this.setState({
      articulo: {
        ...this.state.articulo,
        [inicio]: value,
      },
    });
  }
  guardarArticulo() {
    this.setState({ loading: true });
    request
      .put(`/articulos/${this.state.idArticulo}`, this.state.articulo)
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
  componentDidMount(){
    this.getArticulo();
  }
  getArticulo() {
    this.setState({ loading: true });
    request
    .get(`/articulos/${this.state.idArticulo}`)
    .then((response) => {
      this.setState({
        articulo: response.data,
        loading: false
      });
      if (response.data.exito) window.location.reload();
    })
    .catch((err) => {
      console.error(err);
      this.setState({ loading: false });
    });
  }
  onExitedMessage () {
    if (this.state.rediret) this.props.changeTab( 'buscar' );
  }
  onCancel(){
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }
  onConfirm(){
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.guardarArticulo()
    );
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
        <ConfirmationPrompts
        show={this.state.confirmation.show}
        title={this.state.confirmation.title}
        text={this.state.confirmation.text}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}
        />
        
        <Loading show={this.state.loading} />

        <Row>
          <h1>Editar Articulos</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>ID Articulo</Form.Label>
              <Form.Control
                value={this.state.articulo.id}
                onChange={(e) => this.setValue("id", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={this.state.articulo.nombre}
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                value={this.state.articulo.categoria}
                onChange={(e) => this.setValue("categoria", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                value={this.state.articulo.tipo}
                onChange={(e) => this.setValue("tipo", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Inventario</Form.Label>
              <Form.Control
                value={this.state.articulo.inventario}
                onChange={(e) => this.setValue("inventario", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Novedad</Form.Label>
              <Form.Control
                value={this.state.articulo.novedad}
                onChange={(e) => this.setValue("novedad", e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => 
              this.setState({
                confirmation: {...this.state.confirmation, show: true},
              })
              }
            >
              Guardar articulo
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
