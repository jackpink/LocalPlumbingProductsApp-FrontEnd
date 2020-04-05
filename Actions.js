export const updateFilterProductType = (filter_product_type) => {
    return {
        type: 'UPDATE_FILTER_PRODUCT_TYPE',
        filter_product_type: filter_product_type
    }
}

export const updateProductFilter = (product_filter, product_filter_value) => {
    return {
        type: 'UPDATE_PRODUCT_FILTER',
        path : product_filter,
        value : product_filter_value
    }
}

export const toggleFilter = (product_filter, toggle) => {
    return {
        type: 'TOGGLE_PRODUCT_FILTER',
        path: product_filter,
        value: toggle
    }
}