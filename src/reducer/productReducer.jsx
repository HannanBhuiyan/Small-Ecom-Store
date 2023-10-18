
export const initialState = {
    isLoading: true,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProduct: {}
}

export const reduce = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            const featureData = action.payload.filter((product) => product.featured  === true)
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                featureProducts: featureData 
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                isSingleError: false,
                singleProduct: action.payload
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            }
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isSingleError: true,
            }
        default:
            return state;
    }
}
