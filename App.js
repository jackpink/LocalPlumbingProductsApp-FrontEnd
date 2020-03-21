import React, {Component} from 'react';
import './App.css';
import HomeView from './Views/HomeView'
import ProductView from './Views/ProductView'
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="App">
          <Route exact path='/' component={HomeView} />
          <Route path='/product/:product_id' component={ProductView} />
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
