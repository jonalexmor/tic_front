import React from "react";
import { request } from "../helper/helper";
import { Container, Row } from "react-bootstrap";
import "./empleados.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;
const products = [
  {
    id: 1,
    name: "Juan",
    area: "BackEnd",
  },
  {
    id: 2,
    name: "Diana",
    area: "QA Master",
  },
  {
    id: 3,
    name: "Luis",
    area: "Administrador",
  },
  {
    id: 4,
    name: "Jonathan",
    area: "FrontEnd",
  },
];
const columns = [
  {
    dataField: "id",
    text: "ID Empleado",
  },
  {
    dataField: "name",
    text: "Nombre Empleado",
  },
  {
    dataField: "area",
    text: "Area Compañia",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    request
      .get("/empleados")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleado-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Row>
          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search
          >
            {(props) => (
              <>
                <h3>Ingrese algunos datos para empezar la busqueda:</h3>
                <SearchBar {...props.searchProps} />
                <hr />
                <PaginationProvider pagination={paginationFactory(options)}>
                  {({ paginationProps, paginationTableProps }) => (
                    <div>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                      <BootstrapTable
                        keyField="id"
                        data={products}
                        columns={columns}
                        {...paginationTableProps}
                        {...props.baseProps}
                      />

                      <PaginationListStandalone {...paginationProps} />
                    </div>
                  )}
                </PaginationProvider>
              </>
            )}
          </ToolkitProvider>
        </Row>
      </Container>
    );
  }
}
