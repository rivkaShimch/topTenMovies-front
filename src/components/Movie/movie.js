import React from 'react'
import { connect } from 'react-redux';
import './movie.css'
import MovieDetails from '../MovieDetails/movieDetails';


function Movie(props) {
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
    </div>)

}

export default connect(
    (state) => {
        return {
            topTenMovies: state.topTenMovies,
            routerOptions: state.routerOptions,
            routerFlag: state.routerFlag
        }
    },

    (dispatch) => ({

    })
)(Movie)
