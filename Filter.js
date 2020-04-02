import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import ProductFilters from './Filters/ProductFilters';
import { updateFilterProductType } from './Actions';


class Filter extends Component {
    handleChange = (e) => {
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
                <ProductFilters />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilterProductType: (filter_product_type) => {
            dispatch(updateFilterProductType(filter_product_type))
        }
    }
}

export default connect(null, mapDispatchToProps)(Filter);