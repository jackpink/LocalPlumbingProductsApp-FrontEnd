import React, { Component } from 'react';
//import { ENDPOINT, logError, validateResponse, readResponseAsJSON } from './Utils';
//import Product from './Product';
import { NavLink } from 'react-router-dom';
//import {Col, Container, Row} from "react-bootstrap";
//import { connect } from 'react-redux';
import  Collapse  from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'

class ToiletSuitesFilters extends Component {

    render() {
        return(
            <div>
                <Button>
                    click
                </Button>
                <Collapse>
                    <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </div>
        )
    }
}

//const mapStateToProps = (state) => {
//    return {
//        filter_product_type: state.filter_product_type
//    }
//}

//export default connect(mapStateToProps)(ToiletSuitesFilters);
export default ToiletSuitesFilters;