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


    // sort company value
    const getCompanySelectValue = (e) => {
        let val = e.target.value
        dispatch({ type: "COMPANY_SELECT_VALUE", payload: val })
    }

    // product color filter settings
    const colorHandler = (color) => {
        dispatch({ type: "COLOR_BY_PRODUCT", payload: color })
    }


    // get search value
    const updateFilterProduct = (e) => {
        e.preventDefault()
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: "UPDATE_FILTER_PRODUCT_VALUE", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "UPDATE_FILTER_PRODUCT" })
        dispatch({ type: "SORTING_PRODUCT", payload: products })
    },[state.sort_value, state.filters])


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products  })
    },[products])


    return <FilterProductContext.Provider value={{...state, 
        colorHandler, getCompanySelectValue, updateFilterProduct, handelGridView, handelListView, getSelectValue}} >
        { children }
    </FilterProductContext.Provider>

}

const useFilterContext = () => {
    return useContext(FilterProductContext)
}

export { useFilterContext, FilterProductProvide }