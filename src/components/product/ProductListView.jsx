import React from "react";
import { Link } from "react-router-dom";
import watch_img from '../../assets/images/watch.jpg'
import FormatPrict from "../Utils/FormatPrice";

const ProductListView = ({ filter_products, isLoading }) => {

    if(isLoading){
        return <div> <h2 className="text-[34px] font-poppins font-medium" >Loading.......</h2> </div>
    }


    return(
        <> 

        {
            filter_products.map((product, index) => {
                const { image, price, name, category, description, id } = product
                return(
                    <Link to={`/single-product/${id}`} key={index}>
                        <div className="feature_product_ite flex max-md:flex-wrap rounded-md bg-second-color m-3 p-6 max-xl:p-[20px]">
                            <div className="list_pro_img relative w-4/12 mr-8 max-md:w-full">
                                <div className="img_box overflow-hidden">
                                    <img className="w-full hover:scale-110 transition duration-300 max-sm:h-full max-sm:object-fill max-md:mb-3 " src={image} alt="image" />
                                </div> 
                                <div className="category absolute max-[767px]:top-[40px] max-[767px]:right-[40px] top-[30px] right-[30px] bg-white px-8 py-1 rounded-[30px] font-poppins ">
                                    <span>{category}</span>
                                </div>
                            </div>
                            <div className="list_pro_content w-7/12 max-md:w-full">
                                <div className="">
                                    <h5 className=" text-[22px] font-semibold font-poppins " >{name}</h5> 
                                    <h6 className=" text-[19px] font-medium font-poppins py-2" >
                                        <FormatPrict price={price} /> 
                                    </h6>
                                    <p className=" text-para-color font-poppins font-medium text-[15px] ">
                                        {description.slice(0, 200)}........
                                    </p>
                                </div>
                                <div className="text-center bg-common-color text-white py-[8px] rounded-md mt-4 mb-[-10px] hover:bg-black transition inline-block px-6 duration-500 ">
                                    <span>Add To Cart</span>
                                </div>
                            </div>
                        </div> 
                    </Link> 
                )
            })
        }
        </>
    )
}

export default  ProductListView