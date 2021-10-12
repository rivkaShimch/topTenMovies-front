import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    topTenMovies: [{name:'aa', category:'action', rate: '5'},{name:'bb', category:'drama', rate: '4'},
    {name:'cc', category:'comedy', rate: '3'},{name:'cc', category:'comedy', rate: '3'},{name:'cc', category:'comedy', rate: '3'},
    {name:'cc', category:'comedy', rate: '3'},{name:'cc', category:'comedy', rate: '3'},{name:'cc', category:'comedy', rate: '3'},
    {name:'cc', category:'comedy', rate: '3'},{name:'cc', category:'comedy', rate: '3'}],
    selectedCategory:'',
    currentMovie:'',
    routerFlag: 'topTenMovies',
    routerOptions:{singleMovie:'singleMovie', addMovie: 'addMovie', topTenMovies:'topTenMovies'}
}
const moviesReducer = {

    setMovies(state, action) {
        state.topTenMovies = action.payload;
    },  
    setCurrentMovie(state, action){
        state.currentMovie= action.payload
    },
    setRouterFlag(state, action){
        state.routerFlag= action.payload
    }

}

export default produce((state, action) => createReducer(state, action,moviesReducer ), initialState);
