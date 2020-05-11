<<<<<<< HEAD
import React from 'react';
import Card from './Card';

const CardList = ({robots,id}) =>{
	// using map for looping around the Card details  
	return(

			<div>
			{
				robots.map((user,i)=>{
					return (
						<Card 

			 				key={id} 
			 				id={robots[i].id}
			 				name={robots[i].name} 
			 				email={robots[i].email} 
			 			/>
					);
				})
			}
			</div>		
				   

		);

}
		
=======
import React from 'react';
import Card from './Card';

const CardList = ({robots,id}) =>{
	// using map for looping around the Card details  
	return(

			<div>
			{
				robots.map((user,i)=>{
					return (
						<Card 

			 				key={id} 
			 				id={robots[i].id}
			 				name={robots[i].name} 
			 				email={robots[i].email} 
			 			/>
					);
				})
			}
			</div>		
				   

		);

}
		
>>>>>>> 02a67379b686fc8abde9cbdb92f0b83024bc9e4e
export default CardList;