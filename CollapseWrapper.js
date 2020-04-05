import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



const collapseWrapper = (WrappedComponent, name) => {
    
    class Wrapper extends React.PureComponent {
        state = {
            open: false
        }
        render() {
            return (
                <div className='product-filters-wrapper'>
                    <Button
                        onClick={() => this.setState({ open: !this.state.open })}
                        aria-controls="product-filter-collapse"
                        aria-expanded={this.state.open}
                        variant="secondary"
                        size="sm"
                        block
                    >
                        {name}
                    </Button>
                    <Collapse in={this.state.open}>
                        <div id="product-filter-collapse">
                            <WrappedComponent {...this.props}/>
                        </div>
                    </Collapse>
                </div>
            );
        }
    }
    return Wrapper;
}

export default collapseWrapper;