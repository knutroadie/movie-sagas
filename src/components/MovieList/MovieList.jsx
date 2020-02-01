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
        // axios get request to redux
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>movie list page</p>
                <div>
                    {this.props.reduxState.movies.map((movie, id) =>
                        <div key={id}><img src={movie.poster}/>{movie.description}{movie.genres}</div>
                    )}
                </div>
                {/* map over the movie list array in redux */}
                {/* append each movie with an edit button */}
                {/* each button is a link to the details page */}
                {/* all wrapped in a Router that will append a Link to edit.js */}
                {/* that will pass down dynamic redux data on props */}
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