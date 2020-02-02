import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {

    editMovie = () => {
        console.log('clicking editMovie');
    }

    cancelEdit = () => {
        console.log('clicking cancel');
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
                <p>details page</p>
                <p>{this.props.reduxState.seeMovie.title}</p>
                <p>{this.props.reduxState.seeMovie.description}</p>
                <p>{this.props.reduxState.seeMovie.genres}</p>
                <button>edit</button>
                <button>cancel</button>
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