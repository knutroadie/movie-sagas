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

    seeDetails = (event, id) => {
        console.log('looking for details on movie:', id);
        this.props.dispatch({
            type: 'EDIT_MOVIE',
            payload: id
        }) 
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <div>
                    {this.props.reduxState.movies.map((movie, id) =>
                        <div key={id} onClick={(event) => this.seeDetails(event, {id})}>
                            <img alt={id} src={movie.poster} />
                            <p>{movie.description}{movie.genres}</p>
                        </div>
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