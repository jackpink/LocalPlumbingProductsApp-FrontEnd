import React from 'react';
import Filter from '../Filter';
import Results from '../Results';
import { Row, Col } from "react-bootstrap";


const HomeView = () => {
    return(
        <div className="Home">
            <Row>
                <p>here</p>
            </Row>
            <Row>
                <Col xs={12}>
                    <Filter />
                </Col>
            </Row>
            <Row>
                <Results />
            </Row>
        </div>
    );
}

export default HomeView