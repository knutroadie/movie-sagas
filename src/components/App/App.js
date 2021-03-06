import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>movie list project</h1>
        <Router>
          <div>
            <Route exact path="/" component={MovieList} />
            <Route path="/details" component={Details} />
            <Route path="/edit" component={Edit} />
          </div>
        </Router>
        {/* <MovieList /> */}
        {/* <Details /> */}
        {/* <Edit /> */}
      </div>
    );
  }
}

export default App;
