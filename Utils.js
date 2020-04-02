
// Variables related to Fetch operations
export const ENDPOINT = "http://127.0.0.1:9876/database"

// Functions related to Fetch operations
export const logError = (error) => {
    console.log('Looks like there was a problem: \n', error);
}

export const validateResponse = (response) => {
    if (!response.ok) {
        console.log(response)
      throw Error(response.statusText);
    }
    return response;
}

export const readResponseAsJSON = (response) => {
    return response.json();
}

// Determining what API call string to make
const toiletsuitesEndpoint = (product_filters) => {
    var queryString = "/toilet_suites"
    var filter_count = 0;
    // Check if any are currently in use
    console.log(product_filters);
    for (var i = 0; i < product_filters.length; i++) {
        if (product_filters[i][0] === true) {
            // Filter is in use
            if (filter_count === 0 ) {
                queryString = queryString + "/";
            } else {
                queryString = queryString + "&";
            }
            queryString = queryString + product_filters[i][2] + "=" + product_filters[i][1];
        }
    }
    return queryString;
}

export const getAPIendpoint = (filter_product_type, product_filters) => {
    switch (filter_product_type) {
        case "toilet_suites":
            return ENDPOINT + toiletsuitesEndpoint(product_filters);
        case "basins":
            return ENDPOINT + "/" + filter_product_type;
        default:
            return "Not Found";
    }
}
