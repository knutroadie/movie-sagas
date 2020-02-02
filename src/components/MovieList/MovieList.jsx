import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieList extends Component {

    componentDidMount() {
        this.getMovies();
        this.getGenres();
    }

    getMovies = () => {
        console.log('refreshing movie list');
        // axios get request to redux
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }

    getGenres = () => {
        console.log('getting genres');
        // axios get request to redux
        this.props.dispatch({
            type: 'GET_GENRES'
        })
    }

    seeDetails = (event, movie) => {
        console.log('looking for details on movie:', movie);
        this.props.dispatch({
            type: 'SEE_MOVIE',
            payload: { movie }
        })
        this.props.history.push('/details')
    }


    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <div>
                    {this.props.reduxState.movies.map((movie, id) =>
                        <div key={movie.id} onClick={(event) => this.seeDetails(event, { movie })}>
                            <img alt={movie.id} src={movie.poster} />
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                        </div>
                    )}
                </div>
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