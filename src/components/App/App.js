import React, { Component } from 'react';
import './App.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>movie list project</p>
        {/* routes */}
        {/* movielist */}
        <MovieList />
        {/* <Details /> */}
        {/* <Edit /> */}
      </div>
    );
  }
}

export default App;
