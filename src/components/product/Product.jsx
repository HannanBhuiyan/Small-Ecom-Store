import React from "react";
import ProductGridView from "./ProductGridView";
import { Link } from "react-router-dom";
import ProductListView from "./ProductListView";
import ProductSidebar from "./ProductSidebar";
import ProductFilterBar from "./ProductFilterBar";

const Product = () => {
    return(
        <>
            <div className="product_page_section">
                <div className="container mx-auto">
                    <div className="product_page_inner flex">
                        <div className="product_left h-full w-3/12 mr-8 rounded-md bg-second-color p-[30px] mt-[80px] mb-[100px]">
                           <ProductSidebar />
                        </div>
                        <div className="product_right w-8/12 mt-[70px] mb-[90px]"> 
                            <div className="product_filter_bar">
                                <ProductFilterBar /> 
                            </div>
                            <div className="grid_view_product grid grid-cols-3 ">
                                <ProductGridView />  
                                <ProductGridView />  
                                <ProductGridView />  
                                <ProductGridView />  
                                <ProductGridView />  
                                <ProductGridView />  
                                <ProductGridView />  
                                <ProductGridView />  
                            </div>
                            {/* <div className="list_view_pro grid grid-cols-1 ">
                                <ProductListView />
                                <ProductListView />
                                <ProductListView />
                                <ProductListView />
                                <ProductListView />
                                <ProductListView />
                                <ProductListView />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product