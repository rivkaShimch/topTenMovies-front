import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import moviesReducer from './reducers/movies.reducer'
import {addMovie, getMovies, getMoviesByCategory} from './middelware/movies.middelware'
import { actions } from './actions/action';
const store = createStore( moviesReducer
    , composeWithDevTools(applyMiddleware(thunk,
    // all the middlewares
    addMovie,getMovies,getMoviesByCategory)
    )
    )
    store.dispatch(actions.getMoviesServer());

export default store;
