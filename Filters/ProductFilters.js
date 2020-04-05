import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import STrapFilter from './S-TrapFilter';
import { switchProductFilters } from './FilterSelector';

const ProductFilters = (props) => {
    const [open, setOpen] = useState(false);
    const product_filter_type = useSelector(state => state.product_filter_type);
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="product-filters-collapse"
          aria-expanded={open}
          variant="dark"
          size="lg"
          block
        >
          Refine
        </Button>
        <Collapse in={open}>
          <div id="product-filters-collapse">
            {switchProductFilters(props.filter_product_type)}
            <STrapFilter />
          </div>
        </Collapse>
      </>
    );
}

export default ProductFilters;