
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartStore")
    if(localCartData) {
        return JSON.parse(localCartData);
    }
    else {
        return [];
    }
}
 

export const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    totle_amount: "",
    shipping_fee: 9000,
    modal: false,
}

export const reduce = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            const {id, amount, activeColor, stock, singleProduct } = action.payload

            let cartProduct;

            cartProduct = {
                id: id + activeColor,
                image: singleProduct.image[0].url,
                reviews: singleProduct.reviews,
                stars: singleProduct.stars,
                price: singleProduct.price,
                activeColor,
                amount,
                stock, 
                name: singleProduct.name
            } 
            return {
                ...state,
                cart: [...state.cart, cartProduct]
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
        case "DELETE_ITEM":

            const updateItem = state.cart.filter((curElem) =>  curElem.id !== action.payload)

            return {
                ...state,
                cart: updateItem

            }
        default:
            return state;
    }
}

  
 