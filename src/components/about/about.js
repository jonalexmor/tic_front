import React from 'react';
import Jumbotron from './jumbotron/Jumbotron';
import Detalles from './detalles/Detalles';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron /> 
				<Detalles /> 
 
	  		</main>
            );
    }
}
 
