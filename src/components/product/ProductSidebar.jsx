import React from "react";
import { Link } from "react-router-dom";

const ProductSidebar = () => {
    return(
        <>
            <div className="product_sidebar_inner ">
                <div className="search mb-[30px]">
                    <input type="text" className="w-full px-5 py-3 font-poppins text-[16px] rounded-md focus:outline-none focus:border-common-color border-2 focus:border-2 " placeholder="Search" />
                </div>
                <div className="category_list">
                    <h2 className="text-[22px] text-title-color font-poppins mb-3 font-semibold " >Category</h2>
                    <ul>
                        <li className="text-[16px] font-poppins mb-2 " >
                            <Link>Mobile</Link>
                        </li>
                        <li className="text-[16px] font-poppins mb-2 " >
                            <Link>Laptop</Link>
                        </li>
                        <li className="text-[16px] font-poppins mb-2 " >
                            <Link>Computer</Link>
                        </li>
                        <li className="text-[16px] font-poppins mb-2 " >
                            <Link>Accessories</Link>
                        </li>
                        <li className="text-[16px] font-poppins mb-2 " >
                            <Link>Watch</Link>
                        </li>
                    </ul>
                </div>
                <div className="company">
                    <h2 className="text-[22px] mt-[30px] text-title-color font-poppins mb-3 font-semibold" >Company</h2>
                    <select name="" id="" className="w-full px-4 py-4 rounded-md font-poppins text-[16px] mb-[30px] outline-none ">
                        <option value="">Apple</option>
                        <option value="">Apple</option>
                        <option value="">Apple</option>
                        <option value="">Apple</option>
                    </select>
                </div>
                <div className="colors mb-[30px]">
                    <h2 className="text-[22px] text-title-color font-poppins mb-3 font-semibold" >Colors</h2>
                    <ul className="flex max-[1279px]:flex-wrap">
                        <li className="w-[35px] h-[35px] bg-red-600 rounded-full mr-[15px] max-[1279px]:mb-2 " ></li>
                        <li className="w-[35px] h-[35px] bg-yellow-600 rounded-full mr-[15px] max-[1279px]:mb-2 " ></li>
                        <li className="w-[35px] h-[35px] bg-indigo-600 rounded-full mr-[15px] max-[1279px]:mb-2 " ></li>
                        <li className="w-[35px] h-[35px] bg-green-600 rounded-full mr-[15px] max-[1279px]:mb-2 " ></li>
                        <li className="w-[35px] h-[35px] bg-black rounded-full mr-[15px] max-[1279px]:mb-2 " ></li>
                    </ul>
                </div>
                <div className="price_range mb-[30px]">
                <   h2 className="text-[22px] text-title-color font-poppins mb-2 font-semibold" >Price</h2>
                    <input type="range" className="w-full" />
                </div>
                <div className="clearb_btn mb-[30px] text-center">
                    <button className="bg-common-color px-8 py-4 font-poppins text-white font-medium rounded-md" >CLEAR FILTER</button>
                </div>
           </div>
        </>
    )
}

export default ProductSidebar