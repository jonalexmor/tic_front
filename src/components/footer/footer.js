import React from 'react';
import "./footer.css"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <footer id='Footer' expand="lg" variant="dark">
            <p className="float-right"><a href="/index">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Tienda Tecnologica TIC, Inc. &middot; <a href="/index">Política de Privacidad</a> &middot; <a href="/index">Términos</a></p>
        </footer>
         );
    }
}
 
