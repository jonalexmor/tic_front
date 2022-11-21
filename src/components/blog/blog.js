import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "./Slider";
import "./blog.css"


export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() { 
        return ( 
          <Container id="blog-container">
            <h1>Blog al día</h1>
        <Slider/>
        </Container>

        
        
        );
    }
}
 
