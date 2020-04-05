import React from 'react';
import STrapFilter from './S-TrapFilter';
import WaterInletFilter from './WaterInletFilter';
import WasteOutletFilter from './WasteOutletFilter';

export const switchProductFilters = (product) => {
    console.log(product);
    switch (product) {
        case "toilet_suites":
            console.log("TOILET SUITES DISPLAY");
            return (
                <div>
                    <WaterInletFilter />
                    <WasteOutletFilter />
                </div>
            )

        case "basins":
            console.log("BASINS DISPLAY");
            return null;
        default:
            console.log("NEIHER");
            return null;
    }
}