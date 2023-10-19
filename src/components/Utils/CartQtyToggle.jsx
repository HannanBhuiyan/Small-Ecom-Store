import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CartQtyToggle = ({ singleProduct }) => {

    const { stock } = singleProduct
    const [count, setCount] = useState(1)

    const handelIncement = () => {
        if(count === stock){
            alert("Complete product limits")
        }
        setCount(prevCount => prevCount + 1)
      
    }

    const handelDecrement = () => {
        if(count > 1){
            setCount(prevCount => prevCount - 1)
        }
        else {
            alert("Not accepted")
        }
    }

    return(
        <>
            <div className="product_qty flex items-center mt-[30px] ">
                <div className="count flex items-center border-common-color border-2 rounded-md ">
                    <div className="count_box w-[90px] text-center font-poppins font-medium text-[20px] ">
                        <span>{count}</span>
                    </div>
                    <div className="logic_box pr-3 py-1">
                        <div className="increment cursor-pointer hover:text-common-color duration-300 "> <FontAwesomeIcon onClick={handelIncement} icon={faChevronUp} /> </div>
                        <div className="decrement cursor-pointer hover:text-common-color duration-300"> <FontAwesomeIcon onClick={handelDecrement} icon={faChevronDown} /></div>
                    </div> 
                </div>
                <div className="add_to_cart  flex ml-[30px] font-poppins  ">
                    {stock > 0 ?   <button className="bg-common-color text-white rounded-md  px-8 py-[18px] text-[17px] hover:bg-black duration-500 "> 
                    <FontAwesomeIcon className="pr-2" icon={faCartShopping} /> Add To Cart</button> :
                      <button className="text-[#f74b81] bg-[#fde0e9] rounded-md  px-8 py-[18px] text-[17px] "> 
                    <FontAwesomeIcon className="pr-2" icon={faCartShopping} />Stock Out</button> }
                </div>
            </div>
        </>
    )
}

export default CartQtyToggle