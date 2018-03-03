import React, { Component } from 'react';
import CardList from '../component/CardList';
import Searchbox from '../component/Searchbox';
import Scroll from '../component/Scroll';

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

    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading robots!</h1>;
    } else {
      return (
        <div className="tc">

            <h1 className="f1">Robofriends</h1>
          <Searchbox searchChange={ this.onSearchChange }/>
          <Scroll>
            <CardList robots={ filteredRobots }/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
