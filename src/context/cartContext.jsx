import { createContext, useContext, useEffect, useReducer } from "react"; 
import { initialState, reduce } from "../reducer/cartReducer";




const CartContext =  createContext()

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reduce, initialState)


    // add to cart
    const addToCartHandler = (id, amount, stock, activeColor, singleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: {id, amount, stock, activeColor, singleProduct} })
    }

    // popup modal
    const showModalPopup = () => {
        dispatch({ type: "MODAL_POPUP_SHOW" })
    }

    const cancelModalPopup = () => {
        dispatch({ type: "MODAL_POPUP_HIDE" })
    }

    // delete item
    const deleteCartItem = (id) => {
        dispatch({type: "DELETE_ITEM", payload: id})
    }


    useEffect(() => {
        localStorage.setItem('cartStore', JSON.stringify(state.cart))
    },[state.cart])


    return <CartContext.Provider value={{ ...state, deleteCartItem, addToCartHandler, showModalPopup,  cancelModalPopup }} >
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {
    return useContext(CartContext)
}

export { useCartContext, CartProvider }