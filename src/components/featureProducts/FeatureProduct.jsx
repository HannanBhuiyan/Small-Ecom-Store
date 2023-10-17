import React from "react";
import iphone_img from '../../assets/images/iphone.jpg'
import camera_img from '../../assets/images/camera.jpg'
import watch_img from '../../assets/images/watch.jpg'

import { Link } from "react-router-dom";

const FeatureProduct = () => {
    return(
        <>
            <div className="feature_product_section bg-second-color py-[100px]">
                <div className="container mx-auto">
                    <div className="feature_product_wrapper">
                        <div className="feature_pro_title text-center mb-10">
                            <h5 className="text-para-color font-semibold font-poppins " >CHECK NOW!</h5>
                            <h2 className=" text-[30px] font-poppins font-semibold text-title-color " >Our Feature Product</h2>
                        </div>
                        <div className="feature_product_inner grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                            <Link to="/product">
                                <div className="feature_product_ite rounded-md bg-white p-10 max-xl:p-[20px]  relative">
                                    <div className="img_box overflow-hidden">
                                        <img className="w-full h-[300px] max-[767px]:h-[200px] hover:scale-110 transition duration-300 max-sm:h-full max-sm:object-fill " src={iphone_img} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[15px] ">
                                        <h5 className=" text-[19px] font-medium font-poppins " >i phone x</h5> 
                                        <h6 className=" text-[19px] font-medium font-poppins " >$40000</h6>
                                    </div>
                                    <div className="text-center bg-common-color text-white py-[7px] rounded-md mt-4 mb-[-10px] hover:bg-black transition duration-500 ">
                                        <span>Add To Cart</span>
                                    </div>
                                    <div className="category absolute top-[60px] right-[60px] max-[767px]:top-[40px] max-[767px]:right-[40px] bg-white px-8 py-1 rounded-[30px] font-poppins ">
                                        <span>Phone</span>
                                    </div>
                                </div> 
                            </Link>
                            <Link to="/product">
                                <div className="feature_product_ite rounded-md bg-white p-10 max-xl:p-[20px]  relative">
                                    <div className="img_box overflow-hidden">
                                        <img className="w-full  h-[300px] max-[767px]:h-[200px] hover:scale-110 transition duration-300 max-sm:h-full max-sm:object-fill " src={camera_img} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[15px] ">
                                        <h5 className=" text-[19px] font-medium font-poppins " >Camera WWX</h5> 
                                        <h6 className=" text-[19px] font-medium font-poppins " >$40000</h6>
                                    </div>
                                    <div className="text-center bg-common-color text-white py-[7px] rounded-md mt-4 mb-[-10px] hover:bg-black transition duration-500 ">
                                        <span>Add To Cart</span>
                                    </div>
                                    <div className="category absolute top-[60px] right-[60px] max-[767px]:top-[40px] max-[767px]:right-[40px] bg-white px-8 py-1 rounded-[30px] font-poppins ">
                                        <span>Camera</span>
                                    </div>
                                </div> 
                            </Link>
                            <Link to="/product">
                                <div className="feature_product_ite rounded-md bg-white p-10 max-xl:p-[20px]  relative">
                                    <div className="img_box overflow-hidden">
                                        <img className="w-full h-[300px] max-[767px]:h-[200px] hover:scale-110 transition duration-300 max-sm:h-full max-sm:object-fill  " src={watch_img} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[15px] ">
                                        <h5 className=" text-[19px] font-medium font-poppins " >Watch XXX</h5> 
                                        <h6 className=" text-[19px] font-medium font-poppins " >$40000</h6>
                                    </div>
                                    <div className="text-center bg-common-color text-white py-[7px] rounded-md mt-4 mb-[-10px] hover:bg-black transition duration-500 ">
                                        <span>Add To Cart</span>
                                    </div>
                                    <div className="category absolute max-[767px]:top-[40px] max-[767px]:right-[40px] top-[60px] right-[60px] bg-white px-8 py-1 rounded-[30px] font-poppins ">
                                        <span>Watch</span>
                                    </div>
                                </div> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct