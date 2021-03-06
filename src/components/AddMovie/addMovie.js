import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
function AddMovie(props) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [rate, setRate] = useState('')

    const checkedValidation = () => {
        if (name === '') {
            alert('Name is a required field.')
            return false
        }
        if (category === '') {
            alert('Category is a required field.')
            return false
        }
        if (rate === '') {
            alert('Rate is a required field.')
            return false
        }
        if (props.topTenMovies.filter(e => e.name.toLowerCase() === name.toLowerCase()).length > 0) {
            alert('This Movie is alredy in the system, please choose another.')
            return false
        }
        return true
    }
    const onsubmitForm = () => {
        let checked = checkedValidation()
        if (checked) {
            const newMovie = {
                name: name,
                image: image,
                category: category,
                rate: rate
            }
            let movie = props.addMovieToServer(newMovie)
            if (movie)
                props.setRouterFlag(props.routerOptions.topTenMovies)
        }
    }

    const encodeImageFileAsURL = (file) => {
        debugger
        let reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result)
        }
        reader.readAsDataURL(file);
    }

    return (<div>
        <Container fluid="md" >
            <Form className="formAddMovie" >
                <div className="paddingDiv" style={{ padding: "15px" }}></div>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Name
                 </Form.Label>
                    <Col sm="2">
                        <Form.Control value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter Movie Name" />
                    </Col>
                    <Col sm="8"></Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Movie's cover image
    </Form.Label>
                    <Col sm="3">
                        <Form.Control type="file" onChange={(e) => { encodeImageFileAsURL(e.target.files[0]) }} placeholder="Choose image" />
                    </Col>

                    <Col sm="8"></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Movie's category
    </Form.Label>
                    <Col sm="3">
                        <Form.Select value={category} onChange={(e) => { setCategory(e.target.value) }}>
                            <option value="">Choose...</option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Science Fiction">Science Fiction</option>
                        </Form.Select>    </Col>
                    <Col sm="8"></Col>

                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">

                    <Form.Label column sm="2">
                        Movie's rate
    </Form.Label>
                    <Col sm="3">
                        <Form.Select value={rate} onChange={(e) => { setRate(e.target.value) }}>
                            <option value="">Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>    </Col>
                    <Col sm="8"></Col>

                </Form.Group>
                <div className="paddingDiv" style={{ padding: "5px" }}></div>
                <div>
                    <div className="col-2 paddingLeft"></div>
                    <Button variant="primary" className="submitButton " onClick={() => { onsubmitForm() }}>
                        Submit
              </Button>

                </div>
            </Form>
        </Container>

    </div>)

}

export default connect(
    (state) => {
        return {
            topTenMovies: state.topTenMovies,
            routerFlag: state.routerFlag,
            routerOptions: state.routerOptions
        }
    },

    (dispatch) => ({
        setRouterFlag: (val) => { dispatch(actions.setRouterFlag(val)) },
        addMovieToServer: (val) => { dispatch(actions.addMovieToServer(val)) },
    })
)(AddMovie)
