import React, { Component } from 'react';
import '../App/App.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>details page</p>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Details);