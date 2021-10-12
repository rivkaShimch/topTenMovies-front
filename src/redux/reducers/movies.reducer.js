import produce from 'immer'
import createReducer from "./reducerUtils";
import movieImage from '../../components/assets/m1.jpeg'
import movie from '../../components/Movie/movie';
//../../c/assets/m1.jpeg'

const initialState = {
    topTenMovies: [{name:'1', category:'action', rate: '5', image:movieImage},{name:'2', category:'drama', rate: '4'},
    {name:'3', category:'comedy', rate: '3'},{name:'4', category:'comedy', rate: '3'},{name:'5', category:'comedy', rate: '3'},
    {name:'6', category:'comedy', rate: '3'},{name:'7', category:'comedy', rate: '3'},{name:'8', category:'comedy', rate: '3'},
    {name:'9', category:'comedy', rate: '3'},{name:'10', category:'comedy', rate: '3'}],
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
    },
    setSelectedCategory(state, action){
        debugger
        state.selectedCategory= action.payload
    },
    setNewMovie(state, action){
        if(state.selectedCategory === action.payload.category)
            {
                if(state.topTenMovies<10)
                    state.topTenMovies= state.topTenMovies.concat(action.payload)
                else{
                    state.topTenMovies= checkMovieRate(action.payload, state.topTenMovies)
                }
            }
        else{
            state.topTenMovies= checkMovieRate(action.payload, state.topTenMovies)
            debugger
        }
    },

}
const checkMovieRate= (newMovie, topTenMovies)=>{
    let newMoviesList=[]
    let tempMoviesList=[]
    for (let index = 0; index < topTenMovies.length; index++) {
        if(newMovie.rate>topTenMovies[index].rate){
            newMoviesList= topTenMovies.slice(0,index)
            tempMoviesList= topTenMovies.slice(index, topTenMovies.length-1)
            topTenMovies= newMoviesList.concat(newMovie).concat(tempMoviesList)
            break
        }        
    }
    // topTenMovies.map((oldMovie, index)=>{
    //     if(newMovie.rate>oldMovie.rate){
    //         newMoviesList= topTenMovies.slice(0,index)
    //         tempMoviesList= topTenMovies.slice(index, topTenMovies.length-2)
    //         topTenMovies= newMoviesList.concat(newMovie).concat(tempMoviesList)
    //         break
    //     }

    // })
    return topTenMovies

}
export default produce((state, action) => createReducer(state, action,moviesReducer ), initialState);
