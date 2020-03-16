import React from 'react';

const Product = (props) => {
    const {product} = props;    
    return (
        <div className='product'>
            <div id="image_container">
                <a id="image_link" href='#'>
                    <img className="product_image_tile" src={product.Photos[0]}/>
                </a>
            </div>
            <div id="product_content">
                <a href='#'>{product.Name}</a>
                <p>Product Code: {product._id}</p>
            </div>
        </div>
    );
}

export default Product;