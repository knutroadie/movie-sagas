import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Edit extends Component {

    // holds user-generated object until dispatch
    state = {
        movie: {
            title: '',
            description: ''
        }
    }

    // sets local state from inputs
    handleChange = (event, propertyName) => {
        console.log('typing text', this.state.movie);
        this.setState({
            movie: {
                ...this.state.movie,
                [propertyName]: event.target.value
            }
        })
    }

    // dispatches state to redux axios put request
    handleClick = () => {
        console.log('clicking a button', this.state.movie);
        this.props.dispatch({
            type: 'EDIT_MOVIE',
            payload: this.state.movie
        });
        this.props.history.push('/details');
    }

    handleCancel = () => {
        this.props.history.push('/details');
    }

    // renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>edit page</p>
                {/* append the attched image here as well? */}
                <input type="text" placeholder="title" value={this.state.movie.title} onChange={(event) => this.handleChange(event, 'title')}></input>
                <input type="text" placeholder="description" value={this.state.movie.description} onChange={(event) => this.handleChange(event, 'description')}></input>
                {/* <input type="text" placeholder="genre" value={this.state.movie.genre} onChange={(event) => this.handleChange(event, 'genre')}></input> */}
                <button onClick={this.handleClick}>submit changes</button>
                <button onClick={this.handleCancel}>cancel</button>
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