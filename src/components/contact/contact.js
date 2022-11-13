import React from "react";
import Formulario from "./formulario/Formulario";
import Mapa from "./mapa/Mapa";

class Contact extends React.Component {
  render() {
    return (
      <>
        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <h1 className="mb-5" style={{marginTop: 75}}>Contacto</h1>

            <div className="row">
              <div className="col-md-6">
                <Formulario />
              </div>

              <div className="col-md-6">
                <Mapa />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Contact;
