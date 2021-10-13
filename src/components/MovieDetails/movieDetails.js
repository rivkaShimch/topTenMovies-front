import React from 'react'
import { connect } from 'react-redux';
import './movieDetails.css'

function MovieDetails(props) {

       return (<div className="detailsDiv">
           <div className="paddingDiv"></div>
         <h4 >{props.movie.name}</h4>
         <h4 >Movie's Rate {props.movie.rate}</h4>
         <h4>Category {props.movie.category}</h4>
        </div>)

}

export default connect(
    (state) => {
        return {
            topTenMovies: state.topTenMovies,
            routerOptions: state.routerOptions
        }
    },

    (dispatch) => ({
    })
)(MovieDetails)
