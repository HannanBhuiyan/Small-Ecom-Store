import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: "" }] }) => {

    const [mainImage, setMainImage] = useState(imgs[0])

    return(
        <>
            <div className="single_product_image_slider ">
                <div className="image_box px-12 overflow-hidden">
                    <div className="thumbnail overflow-hidden rounded-md ">
                        <img className="w-full h-[440px] cursor-pointer hover:scale-110 duration-500 rounded-md" src={mainImage.url} alt="image" /> 
                    </div>
                </div>
                <div className="img_gellary flex justify-between px-12 mt-7 ">
                {
                    imgs.map((img, index) => {
                        return(
                            <div className="img_item" key={index}>
                                <img onClick={() => { setMainImage(img) }} className="w-[150px] h-[150px] rounded-md cursor-pointer hover:bg-black duration-300 hover:opacity-[.5] " src={img.url} alt="" />
                            </div>
                        )
                    })
                } 
                </div>
            </div>
        </>
    )
}

export default MyImage;