import React, { Component } from 'react';
//import { ENDPOINT, logError, validateResponse, readResponseAsJSON } from './Utils';
//import Product from './Product';
//import { NavLink } from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import { connect } from 'react-redux';
//import  Collapse  from 'react-bootstrap/Collapse'
//import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { updateProductFilter, toggleFilter } from '../Actions';
import collapseWrapper from '../CollapseWrapper';

class STrapFilter extends Component {

    handleChange = (e) => {
        this.props.updateSTrapFilter(e.target.value); 
        console.log(this.props)
    }

    filterToggle = (e) => {
        console.log("TOggle");
        console.log(e.target.checked);
        this.props.toggleFilter(e.target.checked);
    }

    componentDidMount() {
        // Update disabledbutton class on STrapInput
        var STrapInput = document.getElementById("STrapInput");
        if (this.props.s_trap_filter[0]) {
            STrapInput.classList.remove("disabledbutton")
        } else {
            STrapInput.classList.add("disabledbutton");
        }
    }

    componentDidUpdate(prevProps) {
        console.log("update");
        if (prevProps.s_trap_filter[0] !== this.props.s_trap_filter[0]) {
            // Update disabledbutton class on STrapInput
            var STrapInput = document.getElementById("STrapInput");
            if (this.props.s_trap_filter[0]) {
                STrapInput.classList.remove("disabledbutton")
            } else {
                STrapInput.classList.add("disabledbutton");
            }
        }
    }

    render() {
        return(
            <Row>
                <Col xs={1}>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label=""
                            onChange={this.filterToggle}
                        />
                    </Form>
                </Col>
                <Col xs={10}>
                    <div id='STrapInput'>
                        <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>S-Trap Setout : {this.props.s_trap_filter[1]} mm</Form.Label>
                                <Form.Control type="range" min="1" max="400" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col xs={1}></Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        s_trap_filter: state.front_end_filters.s_trap_filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSTrapFilter: (s_trap_setout_value) => {
            dispatch(updateProductFilter('s_trap_filter', s_trap_setout_value))
        },
        toggleFilter: (toggle) => {
            dispatch(toggleFilter('s_trap_filter', toggle))
        }
    }
}

export default collapseWrapper(connect(mapStateToProps, mapDispatchToProps)(STrapFilter), 'S-Trap Filter');
