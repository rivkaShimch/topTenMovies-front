import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function AddMovie(props) {
const [name, setName]= useState('')
const [image, setImage]= useState('')
const [category, setCategory]=useState('')
const [rate, setRate]=useState('')

const onsubmitForm= ()=>{
    props.setRouterFlag(props.routerOptions.topTenMovies)
    const newMovie={
        name: name,
        image: image,
        category:category,
        rate:rate
    }
    props.addMovieToServer(newMovie)
}

return (<div>
        <Form className="formAddMovie" >
            <div className="paddingDiv" style={{ padding: "5px" }}></div>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm="1"></Col>
                <Form.Label column sm="2">
                    Name
                 </Form.Label>
                <Col sm="3">
                    <Form.Control value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Movie Name" />
                </Col>
                <Col sm="7"></Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm="1"></Col>
                <Form.Label column sm="2">
                    Movie's cover image
    </Form.Label>
                <Col sm="3">
                    <Form.Control type="file" onChange={(e)=>{setImage(e.target.files[0])}} placeholder="Choose image" />
                </Col>
                <Col sm="7"></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm="1"></Col>
                <Form.Label column sm="2">
                    Choose movie's category
    </Form.Label>
                <Col sm="3">
                    <Form.Select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value="0">Choose...</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Tension">Tension</option>
                        <option value="Science Fiction">Science Fiction</option>
                    </Form.Select>    </Col>
                    <Col sm="7"></Col>

            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm="1"></Col>

                <Form.Label column sm="2">
                    Choose movie's rate
    </Form.Label>
                <Col sm="3">
                    <Form.Select value={rate} onChange={(e)=>{setRate(e.target.value)}}>
                        <option value="0">Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>    </Col>
                    <Col sm="7"></Col>

            </Form.Group>
            <div className="paddingDiv" style={{ padding: "5px" }}></div>
            <div>
                <div className="col-2 paddingLeft"></div>
             <Button variant="primary" className="submitButton " onClick={()=>{onsubmitForm()}}>
                Submit
              </Button>
              
            </div>
        </Form>
    </div>)

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
        setCurrentMovie: (val) => { dispatch(actions.setCurrentMovie(val)) },
        setRouterFlag: (val) => { dispatch(actions.setRouterFlag(val)) },
        addMovieToServer: (val) => { dispatch(actions.addMovieToServer(val)) },
    })
)(AddMovie)
