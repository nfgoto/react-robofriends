import React, { Component } from 'react';
import CardList from '../component/CardList';
import Searchbox from '../component/Searchbox';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      robots : [],
      searchfield: ''
    };
  }


  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => this.setState({ robots: users }) );
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


    if (this.state.robots.length === 0) {
      return <h1>Loading robots!</h1>;
    } else {
      return (
        <div className="tc">
          <header className="App-header">
            <h1 className="f1">Robofriends</h1>
          </header>
          <div>
            <Searchbox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
