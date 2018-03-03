import React, { Component } from 'react';
import CardList from '../component/CardList';
import Searchbox from '../component/Searchbox';
import { robots } from '../data/robots';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      robots : robots,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    });    
  }

  render() {
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <header className="App-header">
          <h1>Robofriends</h1>
        </header>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
