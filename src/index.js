import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    //GET_MOVIES
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('EDIT_MOVIE', editMovie)
}

function* getMovies() {
    try {
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('error getting movie list', error);
        alert('could not get data at this time. try again later');
    }
}

// axios put yield generator
function* getGenres() {
    try {
        const response = yield axios.get('/genres');
        yield put({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
        console.log('error getting genres', error);
        alert('could not get data at this time. try again later');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// save updates on redux
const seeMovie = (state = {}, action) => {
    if (action.type === 'SEE_MOVIE') {
        return action.payload
    }
    return state;
}

// generator to edit movie in the database
function* editMovie(action) {
    console.log(action.payload.id);
    try {
        yield axios.put(`/movies/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_MOVIES' });
    } catch (error) {
        console.log('Error in editMovie generator', error);
        alert('Could not update data at this time. Try again later');
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        seeMovie,
        editMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
