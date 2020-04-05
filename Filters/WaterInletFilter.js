import React, { Component } from 'react';
import { getHorizontalDirection } from '../Utils';
//import Product from './Product';
//import { NavLink } from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import { connect } from 'react-redux';
//import  Collapse  from 'react-bootstrap/Collapse'
//import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { updateProductFilter, toggleFilter } from '../Actions';
import collapseWrapper from '../CollapseWrapper';

class WaterInletFilter extends Component {

    handleChangeHorizontal = (e) => {
        this.props.updateWaterInletFilter(e.target.value, this.props.water_inlet_filter[1][1]); 
        console.log(this.props)
    }

    handleChangeHeight = (e) => {
        this.props.updateWaterInletFilter(this.props.water_inlet_filter[1][0], e.target.value);
    }

    filterToggle = (e) => {
        console.log("TOggle");
        console.log(e.target.checked);
        this.props.toggleFilter(e.target.checked);
    }

    componentDidMount() {
        // Update disabledbutton class on STrapInput
        var WaterInletInput = document.getElementById("WaterInletInput");
        if (this.props.water_inlet_filter[0]) {
            WaterInletInput.classList.remove("disabledbutton")
        } else {
            WaterInletInput.classList.add("disabledbutton");
        }
    }

    componentDidUpdate(prevProps) {
        console.log("update");
        if (prevProps.water_inlet_filter[0] !== this.props.water_inlet_filter[0]) {
            // Update disabledbutton class on STrapInput
            var WaterInletInput = document.getElementById("WaterInletInput");
            if (this.props.water_inlet_filter[0]) {
                WaterInletInput.classList.remove("disabledbutton")
            } else {
                WaterInletInput.classList.add("disabledbutton");
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
                            id="custom-switch-water-inlet"
                            label=""
                            onChange={this.filterToggle}
                        />
                    </Form>
                </Col>
                <Col xs={10}>
                    <div id='WaterInletInput'>
                        <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label> {Math.abs(this.props.water_inlet_filter[1][0])} mm {getHorizontalDirection(this.props.water_inlet_filter[1][0])} Centre</Form.Label>
                                <Form.Control type="range" min="-400" max="400" onChange={this.handleChangeHorizontal}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Height : {this.props.water_inlet_filter[1][1]} mm</Form.Label>
                                <Form.Control type="range" min="0" max="300" onChange={this.handleChangeHeight}/>
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
        water_inlet_filter: state.front_end_filters.water_inlet_filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWaterInletFilter: (inlet_horizontal_value, inlet_height_value) => {
            dispatch(updateProductFilter('water_inlet_filter', [inlet_horizontal_value, inlet_height_value]))
        },
        toggleFilter: (toggle) => {
            dispatch(toggleFilter('water_inlet_filter', toggle))
        }
    }
}

export default collapseWrapper(connect(mapStateToProps, mapDispatchToProps)(WaterInletFilter), 'Water Inlet Location');