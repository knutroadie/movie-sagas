import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {

    getGenres = () => {
        console.log('getting genres');
        // axios get request to redux
        this.props.dispatch({
            type: 'GET_GENRES'
        })
    }

    editMovie = () => {
        console.log('clicking edit');
        this.props.history.push('/edit')
    }

    cancelEdit = () => {
        console.log('clicking cancel');
        this.props.history.push('/')
    }
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <h3>{this.props.reduxState.seeMovie.movie.movie.title}</h3>
                <p>{this.props.reduxState.seeMovie.movie.movie.description}</p>
                <p>{this.props.reduxState.seeMovie.movie.movie.genres}</p>
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