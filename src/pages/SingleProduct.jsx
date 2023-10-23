import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from '../components/Utils/FormatPrice'
import MyImage from "../components/Utils/MyImage"; 
import Star from "../components/Utils/Star"; 
import CartQtyToggle from "../components/Utils/CartQtyToggle";

const API = "https://api.pujakaitem.com/api/products"




const SingleProduct = () => {
    const {
        getSingleProduct,
        singleProduct, 
        isSingleLoading 
    } = useProductContext()
    
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
        description,
        colors
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
                                <h3 className="text-[34px] font-poppins font-semibold mt-4 " >{name}</h3>
                                <Star stars={stars} reviews={reviews} /> 
                                <h2 className="text-[50px] font-poppins font-bold text-common-color my-[10px] " ><FormatPrice price={price} /> </h2>
                                <p className="text-[17px] font-poppins text-para-color mb-[12px] " >{description}</p>
                                <p className="text-[20px] font-poppins font-medium text-title-color " >Brand: {company}</p>

                              
                                <CartQtyToggle singleProduct={singleProduct} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct