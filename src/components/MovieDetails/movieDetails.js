import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'
import './movieDetails.css'

function MovieDetails(props) {

       return (<div className="detailsDiv">
           <div className="paddingDiv"></div>
         <h4 >{props.movie.name}</h4>
         <h4 >Rate {props.movie.rate}</h4>
         <h4>Category {props.movie.category}</h4>
        </div>)

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
