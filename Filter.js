import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Filter extends Component {
    handleChange = (e) => {
        this.props.update('change')
    }
    render() {
        const {update} = this.props;
        return(
            <div className='filter'>
                <Form>    
                    <Form.Group controlId="filter.ProductCategory">
                        <Form.Label>Select a Product Category</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange}>
                            <option>Toilet Suites</option>
                            <option>Basins</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


export default Filter;