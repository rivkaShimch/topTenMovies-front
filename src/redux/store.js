import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import moviesReducer from './reducers/movies.reducer'
import {addMovie} from './middelware/movies.middelware'
const store = createStore( moviesReducer
    , composeWithDevTools(applyMiddleware(thunk,
    // all the middlewares
    addMovie)
    )
    )

export default store;
