import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieList extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>movie list page</p>
      </div>
    );
  }
}

export default MovieList;