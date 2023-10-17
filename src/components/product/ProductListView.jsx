import React from "react";
import { Link } from "react-router-dom";
import watch_img from '../../assets/images/watch.jpg'

const ProductListView = () => {
    return(
        <> 
            <Link to="/product">
                <div className="feature_product_ite flex rounded-md bg-second-color m-3 p-6 max-xl:p-[20px]">
                    <div className="list_pro_img relative w-4/12 mr-8">
                        <div className="img_box overflow-hidden">
                            <img className="w-full hover:scale-110 transition duration-300 max-sm:h-full max-sm:object-fill  " src={watch_img} alt="" />
                        </div> 
                        <div className="category absolute max-[767px]:top-[40px] max-[767px]:right-[40px] top-[30px] right-[30px] bg-white px-8 py-1 rounded-[30px] font-poppins ">
                            <span>Watch</span>
                        </div>
                    </div>
                    <div className="list_pro_content w-7/12">
                        <div className="">
                            <h5 className=" text-[22px] font-semibold font-poppins " >Watch XXX</h5> 
                            <h6 className=" text-[19px] font-medium font-poppins py-2" >$40000</h6>
                            <p className=" text-para-color font-poppins font-medium text-[15px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vero corporis rerum  t dolore facere numquam odio quod culpa nulla quia possimus quidem, animi sequi laboriosam sint voluptas.</p>
                        </div>
                        <div className="text-center bg-common-color text-white py-[8px] rounded-md mt-4 mb-[-10px] hover:bg-black transition inline-block px-6 duration-500 ">
                            <span>Add To Cart</span>
                        </div>
                    </div>
                </div> 
            </Link> 
        </>
    )
}

export default  ProductListView