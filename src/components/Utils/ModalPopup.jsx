import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const ModalPopup = ( { cancelModalPopup }) => {
    
    return(
        <>
            <div className="modal_section bg-[#848a97cd] w-full h-full top-0 left-0 fixed ">
                <div className="container mx-auto ">
                    <div className="modal_area">
                       <div className="absolute w-full left-0 top-[35%]  transform">
                            <div className="md:w-5/12 w-full py-[100px] lg:mx-auto text-center bg-[#FFFFFF] rounded-lg ">
                                <h2 className="text-[24px] font-poppins font-medium " >This is demo</h2>
                                <div className="flex text-center justify-center">
                                    <Link to="/" className="bg-common-color text-white px-6 py-3 inline-block mt-5 rounded-md mr-7 font-poppins text-[14px] hover:bg-black duration-300 hover:scale-110 " >Go To Home Page</Link>
                                    <Link onClick={cancelModalPopup} className="bg-[#EF4444] text-white px-6 py-3 inline-block mt-5 rounded-md font-poppins text-[14px] hover:bg-black duration-300 hover:scale-110 " >Cancel</Link>
                                </div>
                            </div>
                       </div>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default ModalPopup