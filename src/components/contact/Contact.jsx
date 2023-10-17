import React from "react";

const Contact = () => {
    return(
        <>
            <div className="contact_section my-[100px] mx-[20px]">
                <div className="container mx-auto">
                    <div className="contact_area">
                        <div className="contct_title text-center text-[35px] font-poppins font-bold my-4 ">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="contact_inner">
                            <div className="w-7/12 mx-auto max-md:w-full ">
                                <form action="">
                                    <input type="text"  className="w-full border-2 px-4 py-3 mb-4 rounded-md outline-none focus:border-common-color text-[17px] font-poppins font-medium " placeholder="Enter Your Name" />
                                    <input type="email"  className="w-full border-2 px-4 py-3 mb-4 rounded-md outline-none focus:border-common-color text-[17px] font-poppins font-medium " placeholder="Enter Your Email" />
                                    <textarea name="" className="w-full border-2 px-4 py-3 mb-4 rounded-md outline-none focus:border-common-color text-[17px] font-poppins font-medium "  id="" cols="30" rows="7" placeholder="Message"></textarea>
                                    <button className="bg-common-color px-12 py-4 font-poppins text-white text-[18px] rounded-md outline-none border-none hover:bg-black duration-500 " >SEND</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact