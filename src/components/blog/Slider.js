import React from "react";
import Carousel from "react-bootstrap/Carousel";

//import './Slider.css';

class Slider extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/125164-Microsoft_Windows-operating_systems-748x468.jpg"
            alt="First slide"
            width="500"
            height="400"
          />
          <Carousel.Caption>
            <h3>Ofertas en licencias de Windows</h3>
            <p>Visita nuestra pagina de de productos para obtener</p>
            <p>mas información sobre las licecnias multi equipos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/24/103295-Alt-cmd-keyboards-mac_book-748x421.jpg"
            alt="Second slide"
            width="500"
            height="400"
          />

          <Carousel.Caption>
            <h3>Teclados Gamming</h3>
            <p>Nuevos teclados gamming con calidad garantizada</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/27/143102-computer-748x598.jpg"
            alt="Third slide"
            width="500"
            height="400"
          />

          <Carousel.Caption>
            <h3>Rendimiento garantizado</h3>
            <p>
              Con los nuevos sistemas de refrigeración obtendras el mejor
            </p>
            <p>
              redimiento en tu pc de escritorio o Laptop.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
