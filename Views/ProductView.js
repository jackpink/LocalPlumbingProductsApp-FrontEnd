import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ENDPOINT, logError, validateResponse, readResponseAsJSON } from '../Utils';


class ProductView extends Component {
    state = {
        id: null,
        Name: null,
        Photos: null,
        Summary: null,
        Specifications: null,
    }
    componentDidMount() {
        let id = this.props.match.params.product_id;
        
        const logResult = ((result) => {
            console.log(result[0]);
            this.setState({
                id: result[0]._id,
                Name: result[0].Name,
                Summary: result[0].Summary,
                Photos: result[0].Photos,
                Specifications: result[0].Specifications
            
            }, () => {
                console.log("Set State")
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
          console.log("ENDPOINT : " + ENDPOINT + '/' + id);
          fetchJSON(ENDPOINT + '/' + id);
          
          
    }

    
    render() {
        if (this.state.Photos === null) return null;

        return(
            <div className='Product-page'>
                <h1>Product Page</h1>
                <h2>{this.state.Name}</h2>
                <div id="image_container">
                    {console.log('async')}
                    {console.log(this.state.Photos)}
                    <img className="product_image_tile" alt="Not available" src={this.state.Photos[0]}/>
                </div>
                <p>Product Code: {this.state.id}</p>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}

export default ProductView