import React from 'react';
import './App.css';
import Filter from './Filter';
import Results from './Results';
import {Container, Row} from "react-bootstrap";


function App() {
  state = {
    filter_product_type: null
  }
  updateProductType = (product_type) => {
    console.log(product_type)
  }

  return (
    <Container>
      <div className="App">
        <Row>
          <p>here</p>
        </Row>
        <Row>
          <Filter update={this.updateProductType} />
        </Row>
        <Row>
          <Results />
        </Row>
      </div>
    </Container>
  );
}

export default App;
