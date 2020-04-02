const initState = {
    filter_product_type: 'toilet_suites',
    s_trap_filter: [false, null, "s_trap_filter"]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'UPDATE_FILTER_PRODUCT_TYPE') {
        let new_filter_product_type = action.filter_product_type;
        let new_state = {
            ...state,
            filter_product_type: new_filter_product_type
        }
        return new_state;
    }
    return state;
}

export default rootReducer;