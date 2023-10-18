import React, { createContext, useContext, useEffect, useReducer } from "react"
import { initialState, reduce } from "../reducer/productReducer"
import axios from "axios"


const ProductContent =  createContext()



const ProductProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reduce, initialState)

    // call api for get product
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

    // call api for single product
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url)
            dispatch({
                type: "GET_SINGLE_PRODUCT",
                payload: res.data
            })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR"})
        }
    } 

   
    useEffect(() => { 
        getProducts() 
    },[])
   


 

    return <ProductContent.Provider value={{ ...state, getSingleProduct }} >
            { children } 
        </ProductContent.Provider>

}

const useProductContext = () => {
    return useContext(ProductContent)
}



export  { ProductProvider, useProductContext }