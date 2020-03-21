import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {product} = props;    
    return (
        <div className='product'>
            <div id="image_container">
                <Link id="image_link" to='/product'>
                    <img className="product_image_tile" alt="Not available" src={product.Photos[0]}/>
                </Link>
            </div>
            <div id="product_content">
                <Link to='/product'>{product.Name}</Link>
                <p>Product Code: {product._id}</p>
            </div>
        </div>
    );
}

export default Product;