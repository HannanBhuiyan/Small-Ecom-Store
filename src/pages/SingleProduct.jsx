import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from '../components/FormatPrice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MyImage from "../components/MyImage";
const API = "https://api.pujakaitem.com/api/products"



const SingleProduct = () => {

    const { getSingleProduct , singleProduct, isSingleLoading } = useProductContext()
    const { productId } = useParams()
    const {
        name,
        company,
        price,
        stock,
        shipping,
        stars,
        reviews,
        image,
        description
    } = singleProduct
     
    useEffect(() => {
        getSingleProduct(`${API}?id=${productId}`)
    },[])

    if(isSingleLoading) {
        return <h2>Loading.....</h2>
    }

    return(
        <>
            <div className="single_product_section my-[100px]">
                <div className="container mx-auto">
                    <div className="single_product_area">
                        <div className="grid grid-cols-2">
                            <MyImage imgs={image} /> 
                            <div className="single_product_content">
                                {stock >= 1 ? 
                                <span className="text-[#3BB77E] py-[7px] px-[12px] bg-[#3bb77e2e] inline-block rounded-md text-[14px] font-poppins font-medium " >Sale On</span> 
                                : 
                                <span className="text-[#f74b81] py-[7px] px-[12px] bg-[#fde0e9] inline-block rounded-md text-[14px] font-poppins font-medium " >Sale Off</span>
                                } 
                                <h2 className="text-[40px] font-poppins font-semibold text-title-color my-[10px] " >{name}</h2>
                                <p>{reviews}</p>
                                <h2 className="text-[50px] font-poppins font-bold text-common-color my-[10px] " ><FormatPrice price={price} /> </h2>
                                <p className="text-[17px] font-poppins text-para-color mb-[10px] " >{description}</p>
                                <p className="text-[20px] font-poppins font-medium text-title-color " >Brand: {company}</p>
                                <div className="product_qty flex items-center mt-[30px] ">
                                    <div className="count flex items-center border-common-color border-2 rounded-md ">
                                        <div className="count_box w-[90px] text-center font-poppins font-medium text-[20px] ">
                                            <span>1</span>
                                        </div>
                                        <div className="logic_box pr-3 py-1">
                                            <div className="increment cursor-pointer hover:text-common-color duration-300 "> <FontAwesomeIcon icon={faChevronUp} /> </div>
                                            <div className="decrement cursor-pointer hover:text-common-color duration-300"> <FontAwesomeIcon icon={faChevronDown} /></div>
                                        </div> 
                                    </div>
                                    <div className="add_to_cart  flex ml-[30px] font-poppins text-white ">
                                        <button className="bg-common-color rounded-md  px-8 py-[18px] text-[17px] hover:bg-black duration-500 "> <FontAwesomeIcon className="pr-2" icon={faCartShopping} /> Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct