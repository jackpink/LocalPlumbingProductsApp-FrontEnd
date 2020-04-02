import React, { Component } from 'react';
//import { ENDPOINT, logError, validateResponse, readResponseAsJSON } from './Utils';
//import Product from './Product';
//import { NavLink } from 'react-router-dom';
//import {Col, Container, Row} from "react-bootstrap";
//import { connect } from 'react-redux';
//import  Collapse  from 'react-bootstrap/Collapse'
//import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class STrapFilter extends Component {
    state = {
        s_trap_setout : null
    }

    handleChange = (e) => {
        this.setState({
            s_trap_setout: e.target.value
        });
    }

    render() {
        return(
            <div>
                <Form>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>S-Trap Setout : {this.state.s_trap_setout}</Form.Label>
                        <Form.Control type="range" min="1" max="400" onChange={this.handleChange}/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

//const mapStateToProps = (state) => {
//    return {
//        filter_product_type: state.filter_product_type
//    }
//}

//export default connect(mapStateToProps)(ToiletSuitesFilters);
export default STrapFilter;