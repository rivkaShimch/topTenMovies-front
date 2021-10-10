import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    topTenMovies: [],
}
const moviesReducer = {

    setMovies(state, action) {
        state.topTenMovies = action.payload;
    },  

}

export default produce((state, action) => createReducer(state, action,moviesReducer ), initialState);
