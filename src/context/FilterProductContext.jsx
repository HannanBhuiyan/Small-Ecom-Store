import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reduce } from "../reducer/filterProductReducer";
import { useProductContext } from "./ProductContext";
 

// creae context
const FilterProductContext = createContext()


const FilterProductProvide = ({children}) => {

    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reduce, initialState)

    const handelGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" })
    }
    const handelListView = () => {
        dispatch({ type: "SET_LIST_VIEW" })
    }

    // get select value for sorting
    const getSelectValue = (val) => {
        dispatch({ type: "GET_SELECT_VALUE", payload: val})
    }

    // clear filter
    const clearFilter = () => {
        dispatch({ type: "CLEAR_FILER" })
    }


    // get search value
    const updateFilterProduct = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: "UPDATE_FILTER_PRODUCT_VALUE", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "UPDATE_FILTER_PRODUCT" })
    },[state.filters])

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCT", payload: products })
    },[state.sort_value])


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products  })
    },[products])


    return <FilterProductContext.Provider value={{
        ...state, 
        updateFilterProduct, 
        handelGridView, 
        handelListView, 
        getSelectValue,
        clearFilter
        }} >
        { children }
    </FilterProductContext.Provider>

}

const useFilterContext = () => {
    return useContext(FilterProductContext)
}

export { useFilterContext, FilterProductProvide }