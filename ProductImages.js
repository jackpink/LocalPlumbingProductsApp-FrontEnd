import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Row } from "react-bootstrap";

const ProductImages = (props) => {
    const {imageLinks} = props;
    console.log(imageLinks)    
    return (
        <div className='product-images'>
            <Row>
                <Col xs={1} md={4}></Col>
                <Col xs={10} md={4}>
                    <Carousel responsive>
                        {imageLinks.map(photo=> (
                            <Carousel.Item>
                                <img
                                    src={photo}
                                    alt="Not Available"
                                    className='product-image-slider-image'
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs={1} md={4}></Col>
            </Row>
        </div>
    );
}

export default ProductImages;