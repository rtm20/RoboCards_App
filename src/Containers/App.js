import React,{Component} from 'react';
import CardList from '../Components/CardList';
//import {robots} from './robots'
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component{	

// below is the smart component because it has the state in it the above syntax is of smart component

constructor(){
	super()
	this.state={
		robots:[],
		searchfield:''

	}

}
componentDidMount(){

fetch('https://jsonplaceholder.typicode.com/users')
.then(response=> response.json())
.then(users=> this.setState({robots:users}));

}


onsearchchange=(event)=>{

	this.setState({searchfield: event.target.value})
}
render(){
		const{robots,searchfield}=this.state;
		const filterRobots=robots.filter(robot =>{

		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		return !robots.length?
		<h1>Loading</h1> :
		(

						<div className='tc athelas b underline'>
							<h1>Robo-Friends </h1>
							<SearchBox searchchange={this.onsearchchange}/>
							<Scroll>
								<CardList robots={filterRobots}/>
							</Scroll>
						</div>
					);
		    }
  
}
export default App;
