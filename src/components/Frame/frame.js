import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'
import MovieDetails from '../MovieDetails/movieDetails';
import Movie from '../Movie/movie'
import './frame.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import AddMovie from '../AddMovie/addMovie'
import ResizePanel from "react-resize-panel"


function Frame(props) {

       return (<>
  <h1 className="title">Top Ten Movies</h1>
  {
     
      props.routerOptions.singleMovie===props.routerFlag?
      <MovieDetails/>:
      <>
  <div className="otherOption">
    <div className="col-1"></div>
    <DropdownButton className="col-2" id="dropdown-basic-button" title="filter by category">
        <Dropdown.Item >Action</Dropdown.Item>
        <Dropdown.Item >Drama</Dropdown.Item>
        <Dropdown.Item >Comedy</Dropdown.Item>
        <Dropdown.Item >Tension</Dropdown.Item>
        <Dropdown.Item >Science Fiction</Dropdown.Item>
    </DropdownButton>
    <div className="col-2"></div>
    <Button className="addMovieButton col-2" variant="primary" onClick={()=>{props.setRouterFlag(props.routerOptions.addMovie)}}>Add new movie</Button>
    <div className="col-2"></div>
  </div>
 
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
    {props.routerOptions.addMovie===props.routerFlag?

     <AddMovie/>:<></>}
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
            routerOptions: state.routerOptions
        }
    },

    (dispatch) => ({
        setRouterFlag: (val) => { dispatch(actions.setRouterFlag(val)) },

    })
)(Frame)
