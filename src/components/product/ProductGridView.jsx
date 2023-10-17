import React from "react";
import { Link } from "react-router-dom";
import watch_img from '../../assets/images/watch.jpg'

const ProductGridView = () => {
    return(
        <>
            <Link to="/product">
                <div className="feature_product_ite rounded-md bg-second-color m-3 p-6 max-xl:p-[20px]  relative">
                    <div className="img_box overflow-hidden">
                        <img className="w-full h-[200px] max-[767px]:h-[200px] hover:scale-110 transition duration-300 max-sm:h-full max-sm:object-fill  " src={watch_img} alt="" />
                    </div>
                    <div className="flex justify-between pt-[15px] ">
                        <h5 className=" text-[19px] font-medium font-poppins " >Watch XXX</h5> 
                        <h6 className=" text-[19px] font-medium font-poppins " >$40000</h6>
                    </div>
                    <div className="text-center bg-common-color text-white py-[7px] rounded-md mt-4 mb-[-10px] hover:bg-black transition duration-500 ">
                        <span>Add To Cart</span>
                    </div>
                    <div className="category absolute max-[767px]:top-[40px] max-[767px]:right-[40px] top-[45px] right-[45px] bg-white px-8 py-1 rounded-[30px] font-poppins ">
                        <span>Watch</span>
                    </div>
                </div> 
            </Link>
        </>
    )
}

export default ProductGridView