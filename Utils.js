
// Variables related to Fetch operations
export const ENDPOINT = "http://127.0.0.1:9876/database/toilet_suites"

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

