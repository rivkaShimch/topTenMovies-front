import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'

function MovieDetails(props) {
const backToList=()=>{
  props.setRouterFlag(props.routerOptions.topTenMovies);
  props.setCurrentMovie('')
}
       return (<>
         <h4>{props.currentMovie.name}</h4>
         <h4>Rate {props.currentMovie.rate}</h4>
         <h4>Category {props.currentMovie.category}</h4>
         <div onClick={()=>{backToList()}}>Back to movies list</div>
        </>)

}

export default connect(
    (state) => {
        return {
            topTenMovies: state.topTenMovies,
            currentMovie: state.currentMovie,
            routerOptions: state.routerOptions
        }
    },

    (dispatch) => ({
        setCurrentMovie: (val) => { dispatch(actions.setCurrentMovie(val)) },
        setRouterFlag: (val) => { dispatch(actions.setRouterFlag(val)) },
    })
)(MovieDetails)
