import React, { Component } from 'react';
import '../App/App.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        movie: {
            title: '',
            description: '',
            genre: ''
        }
    }

    handleChange = (event) => {
        console.log('typing text', this.state.movie);
        this.setState({
            movie: {
                ...this.state.movie,
                [propertyName]: event.target.value
              }
        })
    }

    handleClick = () => {
        console.log('clicking a button', this.state.movie);
        this.props.dispatch({
            type: 'EDIT_MOVIE',
            payload: this.state.movie
        });
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>edit page</p>
                <input type="text" placeholder="title" onChange={(event) => this.handleChange}></input>
                <input type="text" placeholder="description" onChange={(event) => this.handleChange}></input>
                <input type="text" placeholder="genre" onChange={(event) => this.handleChange}></input>
                <button onClick={this.handleClick}>submit changes</button>
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