import React, { Component } from 'react';
import { ENDPOINT } from './Utils';
import Product from './Product';
import {Col, Container, Row} from "react-bootstrap";

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
          
        const logError = (error) => {
            console.log('Looks like there was a problem: \n', error);
        }
          
        const validateResponse = (response) => {
            if (!response.ok) {
                console.log(response)
              throw Error(response.statusText);
            }
            return response;
        }
          
        const readResponseAsJSON = (response) => {
            return response.json();
        }
          
        const fetchJSON = (pathToResource) => {
            fetch(pathToResource) // 1
            .then(validateResponse) // 2
            .then(readResponseAsJSON) // 3
            .then(logResult) // 4
            .catch(logError);
          }
          
          fetchJSON(ENDPOINT);
          
          console.log(this.state);


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
                                {this.state.resultsList.map(item=> (
                                    <Col xs={9} md={3} key={JSON.parse(item)._id}>
                                        <div id="product_container">
                                            <Product product={JSON.parse(item)} key={item._id}/>
                                        </div>
                                    </Col>
                                ))}
                            </div>
                        </div>
                    )}
                </Row>
            </div>
            
            </Container>
        );
    }
}

export default Results;