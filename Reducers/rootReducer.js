const initState = {
    filter_product_type: 'toilet_suites'
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'UPDATE_FILTER_PRODUCT_TYPE') {
        let new_filter_product_type = action.filter_product_type;
        return {
            ...state,
            filter_product_type: new_filter_product_type
        }
    }
    return state;
}

export default rootReducer;