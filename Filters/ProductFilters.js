import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import STrapFilter from './S-TrapFilter'

const ProductFilters = (props) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="product-filters-collapse"
          aria-expanded={open}
        >
          Refine
        </Button>
        <Collapse in={open}>
          <div id="product-filters-collapse">
            <STrapFilter />
          </div>
        </Collapse>
      </>
    );
}

export default ProductFilters;