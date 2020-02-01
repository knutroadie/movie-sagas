import React, { Component } from 'react';
import '../App/App.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieList extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        console.log('refreshing movie list');
        
    }
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>movie list page</p>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(MovieList);