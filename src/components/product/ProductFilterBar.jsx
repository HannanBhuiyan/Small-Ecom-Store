import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderNone, faList } from "@fortawesome/free-solid-svg-icons";


const ProductFilterBar = () => {
    return(
        <>
            <div className="product_filter_bar_inner items-center flex max-sm:flex-wrap justify-between px-3 pb-6">
                <div className="grid_box flex items-center max-sm:mb-6">
                    <div className="grid_view bg-second-color text-center leading-[44px] rounded-md mx-auto w-[40px] h-[40px] mr-4">
                        <button className="grid-active bg-common-color w-full h-full rounded-md text-white" >
                            <FontAwesomeIcon className="text-[20px]" icon={faBorderNone} />
                        </button>
                    </div>
                    <div className="list_view bg-second-color text-center w-[40px] h-[40px] leading-[44px] rounded-md ">
                        <button className="">
                            <FontAwesomeIcon className="text-[20px]" icon={faList} />
                        </button>
                    </div>
                </div>
                <div className="total_product">
                    <p className="text-para-color text-[16px] font-poppins font-medium ">12 total products</p>
                </div>
                <div className="sort">
                    <select name="" id="" className="border px-3 py-2 font-poppins text-[16px] rounded-md outline-none ">
                        <option value="">Featured</option>
                        <option value="">Price: Low to High</option>
                        <option value="">Price: High to Low</option>
                        <option value="">Ascending Order</option>
                        <option value="">Descending Order</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default ProductFilterBar