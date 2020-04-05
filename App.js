import React, {Component} from 'react';
import './App.css';
import HomeView from './Views/HomeView'
import ProductView from './Views/ProductView'
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col xs={1} md={0}></Col>
            <Col xs={10} md={12}>
              <div className="App">
                <Route exact path='/' component={HomeView} />
                <Route path='/product/:product_id' component={ProductView} />
              </div>
            </Col>
            <Col xs={1} md={0}></Col>
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
