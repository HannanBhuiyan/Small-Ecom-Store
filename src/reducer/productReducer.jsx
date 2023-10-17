
export const initialState = {
    isLoading: true,
    isError: false,
    products: [],
    featureProducts: []
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
        default:
            return state;
    }
}
