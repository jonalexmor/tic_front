import React from "react";
import Carousel from "react-bootstrap/Carousel";

//import './Slider.css';

class Slider extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/27/139480-technology-Windows_8-computer-748x421.jpg"
            alt="First slide"
            width="500"
            height="400"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/31/158041-SteelSeries-headphones-computer_mice-748x499.jpg"
            alt="Second slide"
            width="500"
            height="400"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/128826-Windows_7-748x552.jpg"
            alt="Third slide"
            width="500"
            height="400"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
