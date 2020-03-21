import React, {Component} from 'react';
import './App.css';
import HomeView from './Views/HomeView'
import ProductView from './Views/ProductView'
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  state = {
    filter_product_type: null
  }

  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="App">
          <Route exact path='/' component={HomeView} />
          <Route path='/product' component={ProductView} />
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
