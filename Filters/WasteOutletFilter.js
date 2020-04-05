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

class WasteOutletFilter extends Component {

    handleChange = (e) => {
        console.log(e.target.value);
        this.props.updateWasteOutletFilter(e.target.value); 
        console.log(this.props)
    }

    filterToggle = (e) => {
        console.log("TOggle");
        console.log(e.target.checked);
        this.props.toggleFilter(e.target.checked);
    }

    componentDidMount() {
        // Update disabledbutton class on STrapInput
        var WasteOutletInput = document.getElementById("WasteOutletInput");
        if (this.props.waste_outlet_filter[0]) {
            WasteOutletInput.classList.remove("disabledbutton")
        } else {
            WasteOutletInput.classList.add("disabledbutton");
        }
    }

    componentDidUpdate(prevProps) {
        console.log("update");
        console.log(prevProps);
        console.log(this.props);
        if (prevProps.waste_outlet_filter[0] !== this.props.waste_outlet_filter[0]) {
            // Update disabledbutton class on STrapInput
            var WasteOutletInput = document.getElementById("WasteOutletInput");
            if (this.props.waste_outlet_filter[0]) {
                WasteOutletInput.classList.remove("disabledbutton")
            } else {
                WasteOutletInput.classList.add("disabledbutton");
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
                            id="custom-switch-waste-outlet"
                            label=""
                            onChange={this.filterToggle}
                        />
                    </Form>
                </Col>
                <Col xs={10}>
                    <div id='WasteOutletInput'>
                        <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="S-Trap"
                                    name="formRadio"
                                    value="S-Trap"
                                    id="s_trap_radio"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="P-Trap"
                                    name="formRadio"
                                    value="P-Trap"
                                    id="p_trap_radio"
                                    onChange={this.handleChange}
                                />
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
        waste_outlet_filter: state.front_end_filters.waste_outlet_filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWasteOutletFilter: (s_trap_setout_value) => {
            dispatch(updateProductFilter('waste_outlet_filter', s_trap_setout_value))
        },
        toggleFilter: (toggle) => {
            dispatch(toggleFilter('waste_outlet_filter', toggle))
        }
    }
}

export default collapseWrapper(connect(mapStateToProps, mapDispatchToProps)(WasteOutletFilter), 'Waste Outlet Type');