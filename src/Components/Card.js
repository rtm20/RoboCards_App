import React from 'react';

//all using Tachyons classes  for css inside div

const Card = ({name,email,id}) =>{
	// DESTRUCTURED ABOVE PROPS INSTEAD OF THIS LINE_______ const {name,email,id}= props;

	// Template strings are used for randomizing the url everytime...
	return(
		<div className='bg-washed-red b--dark-purple b--solid tc calisto dib br3  pa3 ma2 grow dim bw2 shadow-5 '> 
			<img alt='robots'  src={`https://robohash.org/${id}?100x100`}/> 
			<div>
				<h2>{id}</h2>	
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>	
	);
}
 
export default Card;