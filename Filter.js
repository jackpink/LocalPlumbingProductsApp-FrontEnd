import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';


class Filter extends Component {
    handleChange = (e) => {
        console.log(this.props);
        console.log(e.target.value);
        this.props.updateFilterProductType(e.target.value);
    }
    render() {
        return(
            <div className='filter'>
                <Form>    
                    <Form.Group controlId="filter.ProductCategory">
                        <Form.Label>Select a Product Category</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange}>
                            <option value='toilet_suites'>Toilet Suites</option>
                            <option value='basins'>Basins</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilterProductType: (filter_product_type) => {
            dispatch({
                type: 'UPDATE_FILTER_PRODUCT_TYPE',
                filter_product_type: filter_product_type
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Filter);