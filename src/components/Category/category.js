import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'

function Category(props) {

       return (<>
  <h3>{props.currentMovie.category}</h3>
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
)(Category)
