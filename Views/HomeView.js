import React from 'react';
import Filter from '../Filter';
import Results from '../Results';
import { Row } from "react-bootstrap";


const HomeView = () => {
    return(
        <div className="Home">
            <Row>
                <p>here</p>
            </Row>
            <Row>
                <Filter />
            </Row>
            <Row>
                <Results />
            </Row>
        </div>
    );
}

export default HomeView