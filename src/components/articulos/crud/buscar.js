import React from "react";
import { request } from "../../helper/helper";
import { Container, Row } from "react-bootstrap";
import "../articulos.css";
import DataGrid from "../../grid/grid";
import ConfirmationPrompts from "../../prompts/confirmation";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "id",
    text: "ID Producto",
  },
  {
    dataField: "nombre",
    text: "nombre",
  },
  {
    dataField: "categoria",
    text: "Categoria",
  },
  {
    dataField: "tipo",
    text: " Tipo",
  },
  {
    dataField: "inventario",
    text: "Inventario",
  },
  {
    dataField: "novedad",
    text: " Novedad",
  },
];

export default class ArticulosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idArticulo: null,
      confirmation: {
        title: "Eliminar el articulo",
        text: "¿Desea eliminar el articulo?",
        show: false,
      },
      message: {
        text:"",
        show: false,
      },
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  
  onClickEditButton(row) {
    this.props.setIdArticulo(row._id);
    this.props.changeTab("editar");
  }
  onClickDeleteButton(row) {
    this.setState({
      idArticulo: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }
  onCancel(){
    this.setState({
      confirmation:{
        ...this.state.confirmation,
        show: false,
      },
    });
  }
  onConfirm() {
    this.setState(
      {
        confirmation:{
          ...this.state.confirmation,
          show: false,
        },
      },
      this.eliminarArticulo()
    );
  }
  eliminarArticulo(){
    this.setState({ loading: true});
    request
      .delete(`/articulos/${this.state.idArticulo}`)
      .then((response) => {
        this.setState({
          loading: false,
          message:{
            text: response.data.msg,
            show: true,
          },
        });
        if (response.data.exito) window.location.reload();
      })
      .catch((err)=>{
        console.error(err);
        this.setState({ loading: false});
      });
  }
  reLoadPage(){
    setTimeout(() =>{
      window.location.reload();
    }, 2500);
  }
  render() {
    return (
      <Container id="articulos-buscar-container">
        <ConfirmationPrompts
        show={this.state.confirmation.show}
        title={this.state.confirmation.title}
        text={this.state.confirmation.text}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}
        />
        <MessagePrompt 
        text={this.state.message.text}
        show={this.state.message.show}
        duration={2500}
        onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Buscar Articulos</h1>
        </Row>
        <Row>
          <DataGrid 
          url="/articulos" 
          columns={columns} 
          showEditButton={true} 
          showDeleteButton={true} 
          onClickEditButton={this.onClickEditButton} 
          onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
