import React, { Component } from 'react';
import { ENDPOINT, logError, validateResponse, readResponseAsJSON } from './Utils';
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
                console.log(this.state);
            });
            
        });
          
        const fetchJSON = (pathToResource) => {
            fetch(pathToResource) // 1
            .then(validateResponse) // 2
            .then(readResponseAsJSON) // 3
            .then(logResult) // 4
            .catch(logError);
          }

          const { filter_product_type } = this.props;

          fetchJSON(ENDPOINT+filter_product_type);

    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(this.props);
        if (prevProps !== this.props) {
            const logResult = ((result) => {
                this.setState({resultsList: result.results, loading: false}, () => {
                    console.log(this.state);
                });
            
            });
          
            const fetchJSON = (pathToResource) => {
                fetch(pathToResource) // 1
                .then(validateResponse) // 2
                .then(readResponseAsJSON) // 3
                .then(logResult) // 4
                .catch(logError);
            }

            const { filter_product_type } = this.props;

            fetchJSON(ENDPOINT+filter_product_type);
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
                                {console.log(this.state.resultsList.length)}
                                {this.state.resultsList.length? (
                                    this.state.resultsList.map(item=> (
                                        <Col xs={9} md={3} key={JSON.parse(item)._id}>
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
        filter_product_type: state.filter_product_type
    }
}

export default connect(mapStateToProps)(Results);