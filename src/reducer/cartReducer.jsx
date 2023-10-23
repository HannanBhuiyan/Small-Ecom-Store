

export const initialState = {
    cart: [],
    total_item: "",
    totle_amount: "",
    shipping_fee: 9000,
    modal: false,
}

export const reduce = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":

            const {id, amount, activeColor, stock, singleProduct } = action.payload
  
            return {
                ...state,
                cart: action.payload
            }

        case "MODAL_POPUP_SHOW": 
            return {
                ...state,
                modal: true
            }
        case "MODAL_POPUP_HIDE":
            return {
                ...state,
                modal: false
            }
        default:
            return state;
    }
}

  
 