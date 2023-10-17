import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faCircleNodes, faHand, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const OurProcess = () => {
    return(
        <>
            <div className="our_process_section my-[100px]">
                <div className="container mx-auto max-xl:px-[20px]">
                    <div className="our_process_area">
                        <div className="our_process_inner grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-[767px]:grid-cols-1 ">
                            <div className="process_item text-center bg-second-color rounded-md py-[100px] max-sm:px-[30px] ">
                                <FontAwesomeIcon className=" text-[20px] mr-3 text-title-color w-[35px] h-[35px] bg-white p-4 rounded-full mb-[20px] " icon={faCarSide} />
                                <p className="text-[18px] font-poppins mb-0 pb-0 font-medium text-title-color ">Super Fast and Free Delivery</p>  
                            </div>
                            <div className="process_item">
                                <div className="process_top flex items-center bg-second-color py-[45px] px-[30px] rounded-md mb-6  max-sm:px-[30px] ">
                                    <FontAwesomeIcon className=" text-[20px] mr-3 text-title-color w-[35px] h-[35px] bg-white p-4 rounded-full  " icon={faCircleNodes} /> 
                                    <p className="text-[18px] font-poppins mb-0 pb-0 font-medium text-title-color ">Non Contact Shopping</p>
                                </div>
                                <div className="process_top flex items-center bg-second-color py-[45px] px-[30px] rounded-md">
                                    <FontAwesomeIcon className=" text-[20px] mr-3 text-title-color w-[35px] h-[35px] bg-white p-4 rounded-full  " icon={faHand} /> 
                                    <p className="text-[18px] font-poppins mb-0 pb-0 font-medium text-title-color ">Money-back Guarantee</p>
                                </div> 
                            </div>
                            <div className="process_item  max-sm:px-[30px] text-center bg-second-color py-[100px] rounded-md ">
                                <FontAwesomeIcon className=" text-[20px] mr-3 text-title-color w-[35px] h-[35px] bg-white p-4 rounded-full mb-[20px] " icon={faCartShopping} />
                                <p className="text-[18px] font-poppins mb-0 pb-0 font-medium text-title-color">Super Secure Payment System</p>  
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProcess