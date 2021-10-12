import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function AddMovie(props) {
    debugger
       return (<div>
<Form className="formAddMovie" >
<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="5">
    Name
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="Enter Movie Name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="5">
    Movie's cover image
    </Form.Label>
    <Col sm="5">
      <Form.Control  type="file" placeholder="Choose image" />
    </Col>
  </Form.Group>
  <Form.Select >
    <option>Choose movie's category</option>
    <option value="1">Action</option>
    <option value="2">Drama</option>
    <option value="3">Comedy</option>
    <option value="4">Tension</option>
    <option value="5">Science Fiction</option>
  </Form.Select>
  <div className="paddingDiv" style={{padding:"5px"}}></div>
  <Form.Select>
    <option>Choose movie's rate</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </Form.Select>
  <div className="paddingDiv" style={{padding:"5px"}}></div>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>)

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
)(AddMovie)
