import React from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { AiOutlineStar } from 'react-icons/ai'

const Star = ({ stars, reviews }) => {

   const ratingStar =  Array.from({ length: 5 }, (ele, index) => {
       
        let number = index + 0.5

        return(
            <span key={index} >
                {
                    stars >= index + 1
                    ? ( <FaStar className="text-[#FDC040] text-[18px] mr-1 " /> )
                    : stars >= number 
                    ? (<FaStarHalfStroke  className="text-[#FDC040] text-[21px] mr-1" />)
                    : <AiOutlineStar className="text-[#FDC040] text-[21px] mr-1 " /> 
                }
            </span>
        )
    })

    return(
        <>
            <div className="start_icon flex items-center mt-3">
                <span className="flex items-center mr-2" >{ratingStar}</span>
                <span className="font-poppins text-[16px] font-normal text-para-color " >({reviews} reviews)</span>
            </div>
        </>
    )
    

}

export default Star