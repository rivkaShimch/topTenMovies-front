import { actions } from '../actions/action'
import $ from 'jquery'
import keys from '../../config/key';

export const addMovie = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_MOVIE_TO_SERVER') {
        let movie = { movie: action.payload }
        debugger
        let urlData = `${keys.API_URL}/movie/addMovie`
        $.ajax({
            url: urlData,
            method: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(movie),
            success: function (data) {
                if (data.movie)
                    dispatch(actions.setNewMovie(data.movie))
                else {
                    alert('This Movie is alredy in the system, please choose another.')
                }
            },
            error: function (err) {
                console.log(err)

            }
        });
    }
    return next(action);
}




export const getMovies = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_MOVIES_SERVER') {
        let urlData = `${keys.API_URL}/movie/getMovies`
        $.ajax({
            url: urlData,
            method: 'POST',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                dispatch(actions.setMovies(data.movies))
            },
            error: function (err) {
                console.log(err)

            }
        });
    }
    return next(action);
}

export const getMoviesByCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_MOVIES_BY_CATEGORY_SERVER') {
        debugger
        let category = { category: action.payload }
        let urlData = `${keys.API_URL}/movie/getMoviesByCategory`
        $.ajax({
            url: urlData,
            method: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(category),
            success: function (data) {
                console.log(data);
                dispatch(actions.setMovies(data.movies))
            },
            error: function (err) {
                console.log(err)

            }
        });
    }
    return next(action);
}