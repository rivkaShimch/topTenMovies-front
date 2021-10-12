import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'
import Card from 'react-bootstrap/Card';
import movieImage from '../assets/m1.jpeg'
import './movie.css'


function Movie(props) {
const goToCategory=()=>{
    props.setCurrentMovie(props.movie)
    props.setRouterFlag(props.routerOptions.singleMovie)
    debugger
}
       return (<div className="movieCard">
<Card>
  <Card.Img variant="top" src={movieImage} onClick={()=>{goToCategory()}}/>
  {/* <Card.Body>
    <Card.Title>Card Title</Card.Title>
   
    <Button variant="primary">See More</Button>
  </Card.Body> */}
</Card>
        </div>)

}

export default connect(
    (state) => {
        return {
            topTenMovies: state.topTenMovies,
            currentMovie: state.currentMovie,
            routerOptions: state.routerOptions,
            routerFlag: state.routerFlag
        }
    },

    (dispatch) => ({
        setCurrentMovie: (val) => { dispatch(actions.setCurrentMovie(val)) },
        setRouterFlag: (val) => { dispatch(actions.setRouterFlag(val)) },

    })
)(Movie)
