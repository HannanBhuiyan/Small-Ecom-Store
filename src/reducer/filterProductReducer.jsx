
export const initialState = {
    filter_products: [],
    all_products: [],
    isLoading: true,
    grid_view: true,
    sort_value: 'featured',
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 0,
        maxPrice: 0, 
        minPrice: 0
    }
}

export const reduce = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            const products  = action.payload
            let priceArray = products.map((product) => product.price)
            let maxPrice = Math.max(...priceArray)

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{ ...state.filters, maxPrice, price: maxPrice},
                isLoading: false
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "GET_SELECT_VALUE": 
            return {
                ...state,
                sort_value: action.payload
            }

        case "SORTING_PRODUCT":
            let newSortData;
            let tempSortPriduct = [...action.payload]
            switch (state.sort_value) {
                case "assending": 
                     newSortData = tempSortPriduct.sort((a, b) => a.name.localeCompare(b.name))
                   break;
                case "descending":
                    newSortData = tempSortPriduct.sort((a, b) => b.name.localeCompare(a.name))
                    break;
                case "low-to-high":
                    newSortData = tempSortPriduct.sort((a, b) =>  a.price - b.price)
                    break;
                case "high-to-low":
                    newSortData = tempSortPriduct.sort((a, b) =>  b.price - a.price)
                    break;
                case "feature": 
                    newSortData = tempSortPriduct.filter((product) => product.featured === true)
                    break;
                default:
                    return state
            }
            return {
                ...state,
                filter_products: newSortData
            }

        case "UPDATE_FILTER_PRODUCT_VALUE":
            const { name, value } = action.payload 
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
               }
            }
        case "UPDATE_FILTER_PRODUCT":
            let { all_products } = state
            let tempSearchProduct = [...all_products]
            const { text, category, company, color, price } = state.filters

            if(text){
                tempSearchProduct = tempSearchProduct.filter((product) => {
                    return product.name.toLowerCase().includes(text)
                })
            }
            if(category !== "all") {
                tempSearchProduct = tempSearchProduct.filter((product) => product.category === category)
            }
            if(company !== "all"){
                tempSearchProduct = tempSearchProduct.filter((curElem) => curElem.company.toLowerCase() === company.toLowerCase())
            }  
            if(color !== 'all') {
                tempSearchProduct = tempSearchProduct.filter((curElem) => curElem.colors.includes(color) )
            }

            if(price){
                tempSearchProduct = tempSearchProduct.filter((curElem) => curElem.price <= price)
            }

            return {
                ...state,
                filter_products: tempSearchProduct
            }
 
        case "CLEAR_FILER":

            return {
                ...state,
                sort_value: "featured",
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    price: state.filters.maxPrice,
                    maxPrice: state.filters.maxPrice, 
                    minPrice: 0
                }
            }

        default:
            return state;
    }
}


