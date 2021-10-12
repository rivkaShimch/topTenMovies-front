import { actions } from '../actions/action'
import $ from 'jquery'
import keys from '../../config/key';

export const addMovie = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_MOVIE_TO_SERVER') {
        dispatch(actions.setNewMovie(action.payload))
debugger
        // let urlData = `${keys.API_URL}$/movie/addMovie`
        // $.ajax({
        //     url: urlData,
        //     method: 'POST',
        //     contentType: "application/json; charset=utf-8",
        //     data: JSON.stringify(action.payload),
        //     success: function (data) {
               
        //         dispatch(actions.setNewMovie(data.movie))
        //     },
        //     error: function (err) {
        //         console.log(err)
                
        //     }
        // });
    }
    return next(action);
}


export const getMovieByCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_MOVIES_BY_CATEGORY_SERVER') {
        debugger
        dispatch(actions.setNewMovie(action.payload))

        // let urlData = `${keys.API_URL}$/movie/addMovie`
        // $.ajax({
        //     url: urlData,
        //     method: 'POST',
        //     contentType: "application/json; charset=utf-8",
        //     data: JSON.stringify(action.payload),
        //     success: function (data) {
               
        //         dispatch(actions.setNewMovie(data.movie))
        //     },
        //     error: function (err) {
        //         console.log(err)
                
        //     }
        // });
    }
    return next(action);
}