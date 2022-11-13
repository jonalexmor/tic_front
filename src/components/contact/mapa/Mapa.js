import React from "react";

class Mapa extends React.Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8943263287447!2d-74.07289008595616!3d4.6129287436985615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f992718c80c91%3A0x3c8457db43981aa5!2sHotel%20Tequendama!5e0!3m2!1ses-419!2sco!4v1668298953909!5m2!1ses-419!2sco"
          width="600"
          height="450"
          style={{ border: 1 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default Mapa;
