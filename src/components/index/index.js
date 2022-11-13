import React from 'react';
 
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';

class Inicio extends React.Component {
 
	render() {
 
		return(
 
			<> 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Slider /> 
		  	        <Servicios />
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
	  		</>
 
		)
 
	}
 
}
 
export default Inicio;
