import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Details extends Component {

    componentDidMount() {
        this.getGenres(this.props.reduxState.seeMovie.movie.movie);
    }

    getGenres = (id) => {
        console.log('getting genres', id);
        // axios get request to redux
        this.props.dispatch({
            type: 'GET_GENRES',
            payload: id
        })
    }


    editMovie = () => {
        this.props.dispatch({
            type: 'EDIT_MOVIE',
            payload: this.props.reduxState.seeMovie.movie.movie
        });
        this.props.history.push('/edit')
    }

    cancelEdit = () => {
        console.log('clicking cancel');
        this.props.history.push('/')
    }

    // Renders the entire app on the DOM
    render() {
        // console.log(this.props.reduxState.genres);
        return (
            <div className="App">
                <h3>{this.props.reduxState.seeMovie.movie.movie.title}</h3>
                <p>{this.props.reduxState.seeMovie.movie.movie.description}</p>
                {/* this should have another map of a film's genres, stored in redux store */}
                {/* <p>{this.props.reduxState.seeMovie.movie.movie.genres}</p> */}
                {/* {this.props.reduxState.getGenres. */}
                {/* <ul>
                    {this.props.reduxState.genres.map((genre) =>
                        <li key={genre.id}>{genre}</li>
                    )}
                </ul> */}
                <button onClick={this.editMovie}>edit details</button>
                <button onClick={this.cancelEdit}>back to list</button>
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