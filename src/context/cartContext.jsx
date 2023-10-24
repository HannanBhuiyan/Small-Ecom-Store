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

    // cart increment
    const handleIncementAmount = (id) => {
        dispatch({ type: "INCREMENT_AMOUNT", payload: id})
    }
    // cart decrement
    const handleDecrementAmount = (id) => {
        console.log(id)
        dispatch({ type: "DECREMENT_AMOUNT", payload: id })
    }

    // clear cart all item
    const clearCartItem = () => {
        dispatch({ type: "CLEAR_ALL_ITEM" })
    }
   

    useEffect(() => {
        dispatch({ type: "TOTAL_CART_AMOUNT_AND_SUBTOTAL" })

        localStorage.setItem('cartStore', JSON.stringify(state.cart))
    },[state.cart])


    return <CartContext.Provider value={{ ...state, 
    deleteCartItem, 
    addToCartHandler,
    showModalPopup, 
    handleIncementAmount,
    handleDecrementAmount,
    clearCartItem,
    cancelModalPopup }} >
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {
    return useContext(CartContext)
}

export { useCartContext, CartProvider }