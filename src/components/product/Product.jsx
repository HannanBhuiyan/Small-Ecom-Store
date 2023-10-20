import React from "react";
import ProductGridView from "./ProductGridView";
import { Link } from "react-router-dom";
import ProductListView from "./ProductListView";
import ProductSidebar from "./ProductSidebar";
import ProductFilterBar from "./ProductFilterBar";
import { useFilterContext } from "../../context/FilterProductContext";



const Product = () => {
 
    const { 
        filter_products, 
        isLoading,  
        grid_view,  
    } = useFilterContext()

   
 
    return(
        <>
            <div className="product_page_section">
                <div className="container mx-auto">
                    <div className="product_page_inner flex max-lg:flex-wrap max-[1199px]:mx-[20px] ">
                        <div className="product_left h-full w-3/12 max-lg:w-full mr-8 rounded-md bg-second-color p-[30px] mt-[80px] mb-[100px] max-lg:mx-auto ">
                           <ProductSidebar />
                        </div>
                        <div className="product_right w-8/12 max-lg:w-full mt-[70px] mb-[90px]"> 
                            <div className="product_filter_bar">
                                <ProductFilterBar /> 
                            </div>
                            {grid_view ?<div className="grid_view_product grid grid-cols-3 max-[1279px]:grid-cols-2 max-sm:grid-cols-1 ">
                                <ProductGridView filter_products={filter_products} isLoading={isLoading} />
                            </div> :<div className="list_view_pro grid grid-cols-1 ">
                                <ProductListView filter_products={filter_products} isLoading={isLoading} /> 
                            </div>}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product