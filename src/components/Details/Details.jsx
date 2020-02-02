import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {

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
        // if (t)
        return (
            <div className="App">
                {/* {this.props.reduxState.seeMovie.map((movie, id) =>
                    <Route>
                        <div key={id} onClick={(event) => this.movie(event, { id })}>
                            <img alt={id} src={movie.poster} />
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                        </div>
                    </Route>
                )} */}
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