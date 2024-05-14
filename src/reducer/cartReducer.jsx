
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
    shipping_fee: 3000,
    modal: false,
}

export const reduce = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            const {id, amount, activeColor, stock, singleProduct } = action.payload

            let existingproduct = state.cart.find((curItem) => curItem.id === id + activeColor )

            if(existingproduct) {
                let updatedPro = state.cart.map((curEle) => {
                    if(curEle.id === id + activeColor){
                        let newamount = curEle.amount + amount

                        if(newamount > curEle.stock){
                            newamount = curEle.stock
                        }

                        return {
                            ...curEle,
                            amount: newamount
                        }
                    }
                    else {
                        return {
                            ...curEle
                        }
                    }
                    
                })
                return {
                    ...state,
                    cart: updatedPro
                }
            }
            else {
                let cartProduct = {
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
            }
  
        case "INCREMENT_AMOUNT": 
            let updatedProductInc = state.cart.map((curElem) => {
                if(curElem.id === action.payload){ 
                    let incAmount = curElem.amount + 1
                    if(incAmount > curElem.stock ) {
                        incAmount = curElem.stock
                        alert("Product limit done")
                    }
                    return {
                        ...curElem,
                        amount: incAmount
                    }
                }
                else {
                    return curElem
                }
            }) 
            return {
                ...state,
                cart: updatedProductInc
            }
        case "DECREMENT_AMOUNT":
            let updatedProductdec = state.cart.map((curEle) => {
                if(curEle.id === action.payload){
                    let decAmount = curEle.amount - 1

                    if(decAmount < 1){
                        decAmount = 1
                        alert("Negetive not allow")
                    }

                    return {
                        ...curEle,
                        amount: decAmount
                    }
                }
                else {
                    return curEle
                }
            })
            return {
                ...state,
                cart: updatedProductdec
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
        
        case "CLEAR_ALL_ITEM":
            return {
                ...state,
                cart: []
            }

        case "TOTAL_CART_AMOUNT_AND_SUBTOTAL":
            let { total_item, totle_amount } = state.cart.reduce((accumulator, curElem) => {
                const { price, amount } = curElem
                accumulator.total_item += amount
                accumulator.totle_amount += amount * price
                return accumulator;
            },{
                total_item: 0,
                totle_amount: 0
            }) 
            return{
                ...state,
                total_item,
                totle_amount
            }
        default:
            return state;
    }
}

  
 