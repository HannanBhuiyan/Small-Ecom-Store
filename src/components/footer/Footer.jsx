import React from "react";

const Footer = () => {
    return(
        <>
            <div className="footer_section py-[100px] bg-[#07142E] ">
                <div className="container mx-auto">
                    <div className="footer_area">
                        <div className="footer_inner text-center">
                            <div className="w-4/12 mx-auto">
                                <input type="text" className="w-full py-3 px-4 border-second-color rounded-md focus:outline-none border-[3px] focus:border-common-color " placeholder="Enter your e-mail" />
                                <button className="bg-common-color text-white w-full mt-5 py-3 rounded-md font-poppins hover:bg-white hover:text-black transition duration-500 " >SUBSCRIBE</button>
                                <p className="text-white font-poppins text-[15px] mt-[40px]"> &#169; 2022, Nest - HTML Ecommerce Template
All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer