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
    name: "Teclado Gamer",
    price: 150000,
  },
  {
    id: 2,
    name: "Teclado USB",
    price: 30000,
  },
  {
    id: 3,
    name: "Teclado Inhalambrico",
    price: 45000,
  },
  {
    id: 4,
    name: "Portatil Gamer Asus",
    price: 35000000,
  },
  {
    id: 5,
    name: "Portatil Toshiba",
    price: 2450000,
  },
  {
    id: 6,
    name: "Portatil Slim Lenovo",
    price: 2800000,
  },
  {
    id: 7,
    name: "Proyector Samsung",
    price: 1900000,
  },
  {
    id: 8,
    name: "Proyector Reviv",
    price: 2450000,
  },
  {
    id: 9,
    name: "Pantalla 19 pulgadas",
    price: 780000,
  },
  {
    id: 10,
    name: "Pantalla 32 pulgadas",
    price: 1750000,
  },
  {
    id: 11,
    name: "Licencia Office 365",
    price: 280000,
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
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
