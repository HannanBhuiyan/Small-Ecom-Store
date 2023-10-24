import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FaCheck } from "react-icons/fa6";
import { useCartContext } from "../../context/cartContext";

const CartQtyToggle = ({ singleProduct }) => {

    const { addToCartHandler } = useCartContext()
 
    
    const { id, stock, colors } = singleProduct
    const [amount, setCount] = useState(1)
    const [activeColor, setActiveColor] = useState(colors?.[0])

    console.log(stock)

    const handelIncement = () => {
        if(amount >= stock){
            setCount(stock)
            alert("Complete product limits")
        }
        else {
            setCount(prevCount => prevCount + 1)
        }
    }

    const handelDecrement = () => {
        if(amount > 1){
            setCount(prevCount => prevCount - 1)
        }
        else {
            setCount(1)
        }
    }
 
    return(
        <>
         <div className="single_colors mt-5">
                <ul className="flex">
                    <span className="text-[20px] font-poppins mr-3 text-para-color font-medium " >Colors :</span>
                    { colors && colors.map((color, index) => {  
                        
                        return(
                            <li key={index}
                            onClick={() =>{ setActiveColor(color) } }
                             style={{ background: color }} 
                             className="w-[28px] h-[28px] pt-[6px] text-center cursor-pointer rounded-full mr-2  " > 
                            {activeColor === color ?  <FaCheck className="text-white w-full" />  : '' }
                                
                            </li>
                        )
                    }) }
                </ul>
            </div>
            <div className="product_qty flex items-center mt-[30px] ">
                <div className="count flex items-center border-common-color border-2 rounded-md ">
                    <div className="count_box w-[90px] text-center font-poppins font-medium text-[20px] ">
                        <span>{amount}</span>
                    </div>
                    <div className="logic_box pr-3 py-1">
                        <div className="increment cursor-pointer hover:text-common-color duration-300 "> <FontAwesomeIcon onClick={handelIncement} icon={faChevronUp} /> </div>
                        <div className="decrement cursor-pointer hover:text-common-color duration-300"> <FontAwesomeIcon onClick={handelDecrement} icon={faChevronDown} /></div>
                    </div> 
                </div>
                <div className="add_to_cart  flex ml-[30px] font-poppins  ">
                    {stock > 0 ?   <button  onClick={() => { addToCartHandler(id, amount, stock, activeColor, singleProduct) }} className="bg-common-color text-white rounded-md  px-8 py-[18px] text-[17px] hover:bg-black duration-500 "> 
                    <FontAwesomeIcon 
                        className="pr-2"
                        icon={faCartShopping}  
                       
                      /> Add To Cart</button> :
                      <button className="text-[#f74b81] bg-[#fde0e9] rounded-md  px-8 py-[18px] text-[17px] "> 
                    <FontAwesomeIcon className="pr-2" icon={faCartShopping} />Stock Out</button> }
                </div>
            </div>
        </>
    )
}

export default CartQtyToggle