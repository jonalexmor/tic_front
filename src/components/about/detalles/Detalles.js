import React from "react";

class Detalles extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Objetivo</h2>
                        <p>
                            Brindar el mejor servicio en la venta y alquiler de
                            equipos computo y software a los mejores precios. .{" "}
                        </p>
                        <p>
                            <a
                                className="btn btn-secondary"
                                href="/index"
                                role="button"
                            >
                                Leer más &raquo;
                            </a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Misión</h2>
                        <p>
                            Ofrecer soluciones adecuadas a las necesidades del
                            cliente . nos enfocamos en entregar un servicio
                            cercano, profesional y dispuesto a acompañarlos en
                            resolución de sus requerimientos.{" "}
                        </p>
                        <p>
                            <a
                                className="btn btn-secondary"
                                href="/index"
                                role="button"
                            >
                                Leer más &raquo;
                            </a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Visión</h2>
                        <p>
                            Ser reconocidos como una empresa con servicios de
                            calidad y con un alto nivel de satisfacción de sus
                            clientes
                        </p>
                        <p>
                            <a
                                className="btn btn-secondary"
                                href="/index"
                                role="button"
                            >
                                Leer más &raquo;
                            </a>
                        </p>
                    </div>
                </div>

                <hr />
            </div>
        );
    }
}

export default Detalles;
