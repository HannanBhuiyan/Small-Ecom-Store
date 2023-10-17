import React from "react";
import banner_img from '../../assets/images/banner.jpg'

const Hero = () => {
    return(
        <>
            <div className="hero_section mt-[150px] max-lg:mt-[100px] mb-[100px]">
                <div className="container mx-auto max-xl:px-[20px]">
                    <div className="hero_area">
                        <div className="hero_inner grid grid-cols-2 gap-8 max-lg:grid-cols-1 items-center">
                            <div className="hero_content"> 
                                <h5 className="text-para-color text-[20px] font-medium font-poppins max-sm:text-[20px]">WELCOME TO</h5>
                                <h2 className="text-title-color font-poppins font-bold text-[50px] max-sm:text-[30px] " >ShopBox Store</h2>
                                <p className="text-para-color font-normal text-[17px] mt-3 mb-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae quos nesciunt rerum, consequatur neque praesentium fugiat quisquam vero unde.</p>
                                <button className="bg-common-color py-4 px-7 rounded-md text-white block hover:bg-black hove:text-white transition duration-500" >SHOP NOW</button>
                            </div>
                            <div className="hero_image relative z-50 max-lg:mt-[50px] ">  
                                <span className="before:absolute  before:content[''] before:bg-common-color before:w-[400px] before:h-[400px] before:top-[-40px] before:right-0 before:-z-50 before:rounded-md before:opacity-[.5] ] max-[767px]:before:right-[-35px] max-sm:before:hidden">
                                    <img src={banner_img} alt="" className="w-[690px] rounded-md"  />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero