import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Color = ({ singleProduct }) => {

    const {colors} = singleProduct
    const [activeColor, setActiveColor] = useState(colors?.[0])

    return(
        <>
            <div className="single_colors mt-5">
                <ul className="flex">
                    <span className="text-[20px] font-poppins mr-3 text-para-color font-medium " >Colors :</span>
                    { colors && colors.map((color, index) => {  
                        
                        return(
                            <li key={index}
                            onClick={() =>{ setActiveColor(color) } }
                             style={{ background: color }} 
                             className="w-[28px] h-[28px] pt-[6px] text-center cursor-pointer rounded-full mr-2  " > 
                            {activeColor === color ?  <FaCheck className="text-white w-full" />  : '' }
                                
                            </li>
                        )
                    }) }
                </ul>
            </div>
        </>
    )
}
export default Color