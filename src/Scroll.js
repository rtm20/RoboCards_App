<<<<<<< HEAD
import React from 'react';
// Making a scrollable component for our Cardlist so that our search box should alwasy remains at the top...

const Scroll =(props)=>{

return(
		<div style={{overflowY: 'scroll', border:'3px solid black', height:'800px'}}>
			{props.children}
		</div>	
	);
};

=======
import React from 'react';
// Making a scrollable component for our Cardlist so that our search box should alwasy remains at the top...

const Scroll =(props)=>{

return(
		<div style={{overflowY: 'scroll', border:'3px solid black', height:'800px'}}>
			{props.children}
		</div>	
	);
};

>>>>>>> 02a67379b686fc8abde9cbdb92f0b83024bc9e4e
export default Scroll;