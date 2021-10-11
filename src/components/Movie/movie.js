import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movieImage from '../assets/m1.jpeg'

function Movie(props) {
const goToCategory=()=>{
    props.setCurrentMovie(props.movie)
}
       return (<>
<Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={movieImage} onClick={()=>{goToCategory()}}/>
  {/* <Card.Body>
    <Card.Title>Card Title</Card.Title>
   
    <Button variant="primary">See More</Button>
  </Card.Body> */}
</Card>
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
        setCurrentMovie: (val) => { dispatch(actions.setCurrentMovie(val)) },

    })
)(Movie)
