import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  
    const {id} = useParams()
    

    return(
        <>     
            <h2 className="font-['poppins'] text-common-color" >single page id == {id}</h2>
            <p className="text-blue-600">The quick brown fox...</p>
        </>
    )
}

export default SingleProduct