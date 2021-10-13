import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    topTenMovies: [],
    selectedCategory:'',
    routerFlag: 'topTenMovies',
    routerOptions:{singleMovie:'singleMovie', addMovie: 'addMovie', topTenMovies:'topTenMovies'}
}
const moviesReducer = {

    setMovies(state, action) {
        state.topTenMovies = action.payload;
    },  
    setRouterFlag(state, action){
        state.routerFlag= action.payload
    },
    setSelectedCategory(state, action){
        state.selectedCategory= action.payload
    },
    setNewMovie(state, action){
        if(state.selectedCategory===''||state.selectedCategory === action.payload.category)
            {
                state.topTenMovies= checkMovieRate(action.payload, state.topTenMovies)
            }
       
    },

}
const checkMovieRate= (newMovie, topTenMovies)=>{
    let newMoviesList=[]
    let tempMoviesList=[]
    for (let index = 0; index < topTenMovies.length; index++) {
        if(newMovie.rate>topTenMovies[index].rate){
            newMoviesList= topTenMovies.slice(0,index)
            if(topTenMovies.length<10) //no need to delete the last movie
                tempMoviesList= topTenMovies.slice(index, topTenMovies.length)
            else
                tempMoviesList= topTenMovies.slice(index, topTenMovies.length-1)
            topTenMovies= newMoviesList.concat(newMovie).concat(tempMoviesList)
            break
        }        
    }
    return topTenMovies

}
export default produce((state, action) => createReducer(state, action,moviesReducer ), initialState);
