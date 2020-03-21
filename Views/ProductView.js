import React from 'react';
import { Link } from 'react-router-dom';

const ProductView = () => {
    return(
        <div className='Product-page'>
            <h1>Product Page</h1>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default ProductView