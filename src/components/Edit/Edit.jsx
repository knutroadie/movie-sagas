import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Edit extends Component {

state = {

}

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>edit page</p>
        <input type="text" value="movie title"></input>
        <input type="text" value="movie description"></input>
        <input type="text" value="movie genre"></input>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Edit);