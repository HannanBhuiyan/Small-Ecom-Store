import React, {useState } from "react";
import wathc_img from '../assets/images/watch.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTrash, faArrowLeftLong, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Star from "../components/Utils/Star";
import { Link } from "react-router-dom"; 
import ModalPopup from "../components/Utils/ModalPopup";
import { useCartContext } from "../context/cartContext";
import FormatPrice from '../components/Utils/FormatPrice'
 

const CartPage = () => {

    const { modal, stock, 
        showModalPopup, 
        cancelModalPopup ,
        cart, 
        deleteCartItem, 
        handleIncementAmount,
        handleDecrementAmount,
        totle_amount,
        shipping_fee,
        clearCartItem
        } = useCartContext()
 
    return(
        <>
            <div className="cart_section my-[100px]">
                <div className="container mx-auto">
                    <div className="cart_area">
                        <div className="cart_title mb-8">
                            <h2 className="text-[45px] font-poppins font-semibold text-title-color " >Your Cart</h2>
                            <p className="text-[20px] font-poppins "  >There are 3 products in your cart</p>
                        </div>
                        <div className="flex max-[1599px]:flex-wrap mx-auto gap-7 "> 
                                   
                            <div className="cart_left lg:w-9/12 w-full"> 
                          
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border ">
                                        <thead className="bg-[#ececec]" >
                                            <tr className="" >
                                                <th scope="col" className="pl-5 py-6 text-[17px] font-poppins text-title-color font-semibold ">Product</th>
                                                <th scope="col" className="text-center py-6 text-[17px] font-poppins text-title-color font-semibold " >Unit Price</th>
                                                <th scope="col" className="text-center py-6 text-[17px] font-poppins text-title-color font-semibold " >Quantity</th>
                                                <th scope="col" className="text-center py-6 text-[17px] font-poppins text-title-color font-semibold " >Subtotal</th>
                                                <th scope="col" className="text-center pr-5 text-[17px] font-poppins text-title-color font-semibold " >Remove</th>
                                            </tr>
                                        </thead> 
                                        <tbody>
                                        {
                                        cart.length === 0 ? <h2 className="text-[30px] font-semibold  py-4 mt-4 pl-3 font-poppins text-red-400 mb-4 " >Cart item not found</h2> :  ''
                                    }
                                            { cart && cart.map((curEle, index) => {
                                                let totalAmount = curEle.price * curEle.amount 
                                              
                                                return(
                                                    <tr className="border-t" key={index} >
                                                    <td className="pl-5 py-5 mr-[100px]" >
                                                        <div className="flex">
                                                            <div className="pro_img border rounded-md w-32 p-2 mr-5 ">
                                                                <img className="rounded-md" src={curEle.image} alt="watch" />
                                                            </div>
                                                            <div className="pro_content">
                                                                <h2 className="text-[20px] font-semibold text-title-color mb-[8px] " >{curEle.name}</h2>
                                                                <Star stars={curEle.stars} reviews={curEle.reviews} />
                                                            <div className="flex items-center ">
                                                                <span className=" mr-2 mt-1 font-poppins text-[18px] font-medium " >Color:</span> <span className="mt-2" style={{ background: curEle.activeColor, width: "25px", height: "25px", borderRadius: "100%" }} ></span> 
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center font-poppins font-semibold text-[17px] " > <FormatPrice price={curEle.price} />  </td>
                                                    <td className="text-center font-poppins font-semibold text-[17px] " >
                                                        <div className="count flex w-[120px] h-[60px] mx-auto items-center border-common-color border-2 rounded-md ">
                                                            <div className="count_box w-[70px] text-center font-poppins font-medium text-[20px] ">
                                                                <span>{curEle.amount}</span>
                                                            </div>
                                                            <div className="logic_box pr-3 py-1">
                                                                <div className="increment cursor-pointer hover:text-common-color duration-300 "> <FontAwesomeIcon onClick={() => {handleIncementAmount(curEle.id)}} icon={faChevronUp} /> </div>
                                                                <div className="decrement cursor-pointer hover:text-common-color duration-300"> <FontAwesomeIcon onClick={() => {handleDecrementAmount(curEle.id)}} icon={faChevronDown} /></div>
                                                            </div> 
                                                        </div>
                                                    </td>
                                                    <td className="text-center font-poppins font-semibold text-[17px] text-common-color " ><FormatPrice price={totalAmount} /></td>
                                                    <td className="text-center font-poppins font-semibold text-[17px] " >
                                                    <Link>
                                                            <FontAwesomeIcon onClick={() => {deleteCartItem(curEle.id)}}className="hover:text-common-color hover:scale-110 duration-200 text-[#7E7E7E] " icon={faTrash} /> 
                                                    </Link>
                                                    </td>
                                                </tr> 
                                                )
                                            })} 
                                        </tbody>
                                    </table>
                                </div> 
                            </div> 
                            <div className="cart_right bg-second-color rounded-md w-3/12 max-[1599px]:w-full">
                                <div className=" px-5 py-[50px] border m-5 rounded-md ">
                                    <ul> 
                                        <li className="flex justify-between items-center mb-5 border-b pb-5 "> 
                                            <div className="text-[17px] font-poppins font-medium ">
                                                <span>Subtotal </span>
                                            </div>
                                            <div className="text-[17px] font-poppins font-medium ">
                                                <FormatPrice price={totle_amount} /> 
                                            </div>
                                        </li>
                                        <li className="flex justify-between items-center  border-b pb-5 mb-5 "> 
                                            <div className="text-[17px] font-poppins font-medium ">
                                                <span>Shipping </span>
                                            </div>
                                            <div className="text-[17px] font-poppins font-medium ">
                                                <FormatPrice price={shipping_fee} /> 
                                            </div>
                                        </li>
                                        <li className="flex justify-between items-center  border-b pb-5 mb-5 "> 
                                            <div className="text-[17px] font-poppins font-medium ">
                                                <span>Total </span>
                                            </div>
                                            <div className="text-[17px] font-poppins font-medium ">
                                                <FormatPrice price={totle_amount + shipping_fee} /> 
                                            </div>
                                        </li>
                                        <li className="text-center">
                                            <button onClick={showModalPopup} className="bg-common-color w-full  text-white font-poppins font-medium py-3 mt-4 rounded-md hover:bg-black duration-300 hover:scale-110 " >Proceed To CheckOut  <FontAwesomeIcon 
                                            className="pl-3" icon={faArrowRightFromBracket} /> </button>
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                        <div className="lg:w-9/12 w-full">
                            <div className="button_group lg:flex flex-wrap lg:justify-between justify-center ">
                                <div className="btn_left text-center lg:text-start">
                                    <button className="bg-common-color text-white font-poppins px-5 rounded-md mt-4 hover:bg-black duration-300 py-3" > <FontAwesomeIcon className="pr-2"  icon={faArrowLeftLong} /> <Link to="/product"> Continue Shopping</Link> </button>
                                </div>
                                <div className="btn_riht pr-5 text-center lg:text-start ">
                                    <button onClick={clearCartItem}  className="bg-common-color text-white font-poppins px-5 rounded-md mt-4 hover:bg-black duration-300 py-3" > <FontAwesomeIcon className="pr-2"  icon={faTrash} />  Clear Cart</button>
                                </div>
                            </div>
                        </div> 
                        {modal && <ModalPopup cancelModalPopup={cancelModalPopup} />  }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage