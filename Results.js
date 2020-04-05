import React, { Component } from 'react';
import { logError, validateResponse, readResponseAsJSON, getAPIendpoint } from './Utils';
import Product from './Product';
import {Col, Container, Row} from "react-bootstrap";
import { connect } from 'react-redux';

class Results extends Component {

    state = {
        loading: true,
        resultsList: null
    }

    componentDidMount() {

        const logResult = ((result) => {
            this.setState({resultsList: result.results, loading: false}, () => {
            });
            
        });
          
        const fetchJSON = (pathToResource) => {
            fetch(pathToResource) // 1
            .then(validateResponse) // 2
            .then(readResponseAsJSON) // 3
            .then(logResult) // 4
            .catch(logError);
          }
          const { filter_product_type, s_trap_filter } = this.props;
          fetchJSON(getAPIendpoint(filter_product_type, [s_trap_filter]));

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.filter_product_type !== this.props.filter_product_type) {
            // Get new Resultslist from Backend API
            const logResult = ((result) => {
                this.setState({resultsList: result.results, loading: false}, () => {
                });
            
            });
          
            const fetchJSON = (pathToResource) => {
                fetch(pathToResource) // 1
                .then(validateResponse) // 2
                .then(readResponseAsJSON) // 3
                .then(logResult) // 4
                .catch(logError);
            }

            const { filter_product_type, s_trap_filter } = this.props;
    
            fetchJSON(getAPIendpoint(filter_product_type, [s_trap_filter]));
        }
        if (prevProps.front_end_filters !== this.props.front_end_filters) {
            // Update front end filters according to what is currently in use
            const { filter_product_type, s_trap_filter } = this.props;
            console.log(s_trap_filter);
            // Loop through filters and if true then apply function?
        }
    }


    render() {
        return (
            <Container>
            <div className='results'>
                <Row>
                    {this.state.loading || !this.state.resultsList? (
                        <div>loading...</div>
                    ) : (  
                        <div className="results_container">
                            <div className="row">
                                {this.state.resultsList.length? (
                                    this.state.resultsList.map(item=> (
                                        <Col xs={12} md={3} key={JSON.parse(item)._id}>
                                            <div id="product_container">
                                                <Product product={JSON.parse(item)} key={item._id}/>
                                            </div>
                                        </Col>
                                    ))
                                ) : (
                                    <div>No Products Found</div>
                                )}
                                
                            </div>
                        </div>
                    )}
                </Row>
            </div>
            
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter_product_type: state.filter_product_type,
        s_trap_filter: state.front_end_filters.s_trap_filter
    }
}

export default connect(mapStateToProps)(Results);