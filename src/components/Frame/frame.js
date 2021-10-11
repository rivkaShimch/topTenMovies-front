import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'
import Category from '../Category/category';
import Movie from '../Movie/movie'
function Frame(props) {

       return (<>
  <h1>Top Ten Movies</h1>
  {
      props.currentMovie!==''?
      <Category/>:
      props.topTenMovies.map(movie=>
          <Movie movie={movie}/>
      )
    
  }
        </>)

}

export default connect(
    (state) => {
        return {
            topTenMovies: state.topTenMovies,
            currentMovie: state.currentMovie
        }
    },

    (dispatch) => ({
        //setSelectedListFlag: (val) => { dispatch(actions.setSelectedListFlag(val)) },

    })
)(Frame)
