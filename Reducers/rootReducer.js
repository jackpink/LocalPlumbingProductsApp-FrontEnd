const initState = {
    filter_product_type: 'toilet_suites',
    front_end_filters: {
        s_trap_filter: [false, 200, "s_trap_filter"],
        water_inlet_filter: [false, [0, 180], "water_inlet_filter"],
        waste_outlet_filter: [false, "S-Trap", "waste_outlet_filter"]
    }
    
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'UPDATE_FILTER_PRODUCT_TYPE') {
        // Change filter product type value and update all front end filters to false
        let new_filter_product_type = action.filter_product_type;
        let front_end_filters = state.front_end_filters
        console.log(front_end_filters);

        for (let [key, value] of Object.entries(front_end_filters)) {
            front_end_filters[key][0] = false;
        }
        console.log(front_end_filters);
        let new_state = {
            ...state,
            filter_product_type: new_filter_product_type,
        }
        return new_state;
    } 
    if (action.type === 'UPDATE_PRODUCT_FILTER') {
        let product_filter = action.path;
        let product_filter_value = action.value;
        console.log("PRODUCT FILTER " + product_filter);
        let filter_array = [true, product_filter_value, product_filter];
        let new_state = {
            ...state,
        }
        new_state.front_end_filters[product_filter] = filter_array;
        return new_state;
    }
    
    if (action.type === 'TOGGLE_PRODUCT_FILTER') {
        let product_filter = action.path;
        let product_toggle = action.value;
        let product_filter_value = state.front_end_filters[product_filter][1]
        let filter_array = [product_toggle, product_filter_value, product_filter];
        let new_state = {
            ...state
        }
        new_state.front_end_filters[product_filter] = filter_array;
        return new_state;
    }
    return state;
}

export default rootReducer;