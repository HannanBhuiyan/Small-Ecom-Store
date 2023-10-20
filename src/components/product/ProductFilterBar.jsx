import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderNone, faList } from "@fortawesome/free-solid-svg-icons";
import { useFilterContext } from "../../context/FilterProductContext";


const ProductFilterBar = () => {
    const { 
        handelGridView,
        handelListView,
        getSelectValue,
        sort_value,
        grid_view,
        all_products
    } = useFilterContext()


    return(
        <>
            <div className="product_filter_bar_inner items-center flex max-sm:flex-wrap justify-between px-3 pb-6">
                <div className="grid_box flex items-center max-sm:mb-6">
                    <div className="grid_view bg-second-color text-center leading-[44px] rounded-md mx-auto w-[40px] h-[40px] mr-4">
                        <button onClick={handelGridView} className={`${ grid_view === true ? 'bg-common-color w-full h-full rounded-md text-white' : 'bg-second-color w-full h-full rounded-md' }`} >
                            <FontAwesomeIcon className="text-[20px]" icon={faBorderNone} />
                        </button>
                    </div>
                    <div onClick={handelListView} className="list_view text-center w-[40px] h-[40px] leading-[44px]">
                        <button className={`${grid_view === false ? 'bg-common-color w-full h-full  rounded-md text-white': 'bg-second-color w-full h-full  rounded-md '}`}>
                            <FontAwesomeIcon className="text-[20px]" icon={faList} />
                        </button>
                    </div>
                </div>
                <div className="total_product">
                    <p className="text-para-color text-[16px] font-poppins font-medium ">{all_products.length} total products</p>
                </div>
                <div className="sort">
                    <select onChange={(e) => {getSelectValue(e.target.value)}} className="border px-3 py-2 font-poppins text-[16px] rounded-md outline-none ">
                        <option value={sort_value} >--Sort Product--</option>
                        <option value="feature">Featured</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="assending">Ascending Order</option>
                        <option value="descending">Descending Order</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default ProductFilterBar