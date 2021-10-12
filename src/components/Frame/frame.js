import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'
import MovieDetails from '../MovieDetails/movieDetails';
import Movie from '../Movie/movie'
import './frame.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddMovie from '../AddMovie/addMovie'
import ResizePanel from "react-resize-panel"


function Frame(props) {

    const changCategory=(category)=>{
        props.setSelectedCategory(category)
        props.getMoviesByCategoryServer(category)
    }
       return (<>
  <h1 className="title">Top Ten Movies</h1>
  {
     props.routerOptions.addMovie===props.routerFlag?

        <AddMovie/>:
      props.routerOptions.singleMovie===props.routerFlag?
      <MovieDetails/>:
      <>
  <div className="otherOption">
    <Form.Select className="selectCategory" value={props.selectedCategory} onChange={(e)=>{changCategory(e.target.value)}} >
                        <option value="">Filter By Category</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Tension">Tension</option>
                        <option value="Science Fiction">Science Fiction</option>
                    </Form.Select> 
    <Button className="addMovieButton col-2" variant="primary" onClick={()=>{props.setRouterFlag(props.routerOptions.addMovie)}}>Add new movie</Button>
  </div>
 <div className="paddingFrame"></div>
  <div className="mainDiv">
      
    <div className="fullList">
      <div className="moviesList">{
      props.topTenMovies.slice(0, 5).map(movie=>
          <Movie movie={movie}/>)}
    </div>
    <div className="moviesList">{
      props.topTenMovies.slice(5).map(movie=>
          <Movie movie={movie}/>)}
    </div>
    </div>
    </div>
    </>
  }
 </>)

}

export default connect(
    (state) => {
        return {
            topTenMovies: state.topTenMovies,
            currentMovie: state.currentMovie,
            routerFlag: state.routerFlag,
            routerOptions: state.routerOptions,
            selectedCategory: state.selectedCategory
        }
    },

    (dispatch) => ({
        setRouterFlag: (val) => { dispatch(actions.setRouterFlag(val)) },
        setSelectedCategory: (val) => { dispatch(actions.setSelectedCategory(val)) },
        getMoviesByCategoryFromServer: (val) => { dispatch(actions.getMoviesByCategoryFromServer(val)) },
    })
)(Frame)
