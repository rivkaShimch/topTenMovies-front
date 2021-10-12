import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/action'
import Card from 'react-bootstrap/Card';
import movieImage from '../assets/m1.jpeg'
import './movie.css'
import MovieDetails from '../MovieDetails/movieDetails';


function Movie(props) {
    const goToCategory = () => {
        props.setCurrentMovie(props.movie)
        props.setRouterFlag(props.routerOptions.singleMovie)
        debugger
    }
    return (<div className="movieCard">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.movie.image} alt="Avatar" className="movieImg" />
                </div>
                <div className="flip-card-back">
                 <MovieDetails movie={props.movie} />
                </div>
            </div>
        </div>
        {/*            
<Card>
  <Card.Img variant="top" src={movieImage} onClick={()=>{goToCategory()}}>
  </Card.Img>
</Card> */}
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
