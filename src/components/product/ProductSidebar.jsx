import React from "react"; 
import { useFilterContext } from "../../context/FilterProductContext";
import { FaCheck } from "react-icons/fa6";
import FormatPrice  from '../Utils/FormatPrice'

const ProductSidebar = () => {

    const {
        filters: { text, category, color, price, maxPrice, minPrice },  
        all_products, 
        updateFilterProduct, 
        clearFilter } = useFilterContext()

    const getUniqueData = (data, attr) => {
        let newVal = data.map((curElem) => {
            return curElem[attr]
        })

        if(attr === "colors"){ 
            // return (newVal = ['all', ...new Set([].concat(...newVal))])
            newVal = newVal.flat()
        }
        return(newVal = ['all', ...new Set(newVal)])
 
    }

 
    const companyData = getUniqueData(all_products, 'company')
    const categoryData = getUniqueData(all_products, 'category')
    const colorsData = getUniqueData(all_products, 'colors')


    // capitalize function
    const capitalize = (value) => {
        let lower = value.toLowerCase()
        return value.charAt(0).toUpperCase() + lower.slice(1)
    }
 

    return(
        <>
            <div className="product_sidebar_inner ">
                <div className="search mb-[30px]">
                    <form onSubmit={(e) => e.preventDefault()} > 
                        <input 
                        name="text"
                        value={text}
                        onChange={updateFilterProduct}
                        type="text" 
                        className="w-full px-5 py-3 font-poppins text-[16px] rounded-md focus:outline-none focus:border-common-color border-2 focus:border-2 " placeholder="Product name" />
                    </form>
                </div>
                <div className="category_list">
                    <h2 className="text-[22px] text-title-color font-poppins mb-3 font-semibold " >Category</h2>
                    <ul>
                        {
                            categoryData.map((CurrentEle, index) => { 
                                return(
                                    <li key={index} className="text-[16px] font-poppins" >
                                        <button
                                        className={CurrentEle === category? 'bg-common-color w-full text-left px-3 py-2 rounded-md text-white' : 'w-full text-left px-3 py-2'}
                                        name="category"
                                        value={CurrentEle}
                                        type="button"
                                        onClick={updateFilterProduct}>
                                            {capitalize(CurrentEle)}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="company">
                    <h2 className="text-[22px] mt-[30px] text-title-color font-poppins mb-3 font-semibold" >Company</h2>
                    <select name="company" onChange={updateFilterProduct} className="w-full px-4 py-4 rounded-md font-poppins text-[16px] mb-[30px] outline-none ">
                        {companyData.map((company, index) => {
                            return (
                                <option name="company" key={index} value={company}>{capitalize(company)}</option>
                            )
                        })}
                     
                    </select>
                </div>
                <div className="colors mb-[30px]">
                    <h2 className="text-[22px] text-title-color font-poppins mb-3 font-semibold" >Colors</h2>
                    <ul className="flex max-[1279px]:flex-wrap"> 
                        {colorsData.map((curColor, index) => {
                            if(curColor === 'all'){
                                return(
                                    <li key={index} >
                                    <button   
                                        className="font-poppins text-[24px] mr-3 " 
                                        value={curColor} 
                                        name="color" 
                                        type="button" 
                                        onClick={updateFilterProduct}>
                                        All
                                        </button>
                                    </li>
                                )
                            }
                            return(
                                <li key={index} >
                                    <button  
                                    style={{ background: curColor }} 
                                    className="w-[35px] h-[35px] rounded-full mr-[15px] max-[1279px]:mb-2 " 
                                    value={curColor} 
                                    name="color" 
                                    type="button" 
                                    onClick={updateFilterProduct}>
                                    {color === curColor ?  <FaCheck className="text-white w-full" />  : '' }
                                    </button>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
                <div className="price_range mb-[30px]">
                <   h2 className="text-[22px] text-title-color font-poppins mb-2 font-semibold" >Price</h2>
                    <p><FormatPrice price={price} />  </p>
                    <input type="range" 
                    name="price" 
                    value={price} 
                    max={maxPrice} 
                    min={minPrice} 
                    onChange={updateFilterProduct} 
                    className="w-full" />
                </div>
                <div className="clearb_btn mb-[30px] text-center">
                    <button onClick={clearFilter} className="bg-common-color hover:bg-black duration-300 px-8 py-4 font-poppins text-white font-medium rounded-md" >CLEAR FILTER</button>
                </div>
           </div>
        </>
    )
}

export default ProductSidebar