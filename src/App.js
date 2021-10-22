import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {Robots} from './Robots'; 
import './App.css';



class App extends Component {
    
    constructor(){
        super()
        this.state = {
            Robots: Robots,
            searchfield:''
        }
    }
    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value})
    }

    render(){
            const filteredRobots = this.state.Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc' >
            <h1 className='heading f1'>Robofriends</h1>
            <SearchBox onSearchChange = {this.onSearchChange}/>
            <hr/>
            <CardList Robots={filteredRobots}/>
            </div>
        );
    }
    
}
export default App;
