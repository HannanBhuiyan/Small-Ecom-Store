import React, { createContext, useContext, useEffect, useReducer } from "react"
import { initialState, reduce } from "../reducer/productReducer"
import axios from "axios"


const ProductContent =  createContext()



const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reduce, initialState)

    const getProducts = async () => {
        dispatch({ type: "SET_LOADING" })
        try {
            const result = await axios.get("https://api.pujakaitem.com/api/products")
            dispatch({
                type: "GET_PRODUCT",
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: "SET_ERROR"
            })
        }
    }

    useEffect(() => {
        getProducts()
    },[])


    return <ProductContent.Provider value={{ ...state }} >
            { children } 
        </ProductContent.Provider>

}

const useProductContext = () => {
    return useContext(ProductContent)
}



export  { ProductProvider, useProductContext }