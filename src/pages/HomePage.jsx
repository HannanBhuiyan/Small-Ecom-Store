import React from "react";
import Hero from "../components/hero/Hero";
import FeatureProduct from "../components/featureProducts/FeatureProduct";
import OurProcess from "../components/ourProcess/OurProcess";
import ClientLogo from "../components/clientLogo/ClientLogo";

const HomePage = () => {
    return(
        <>
            <Hero sub_title="WELCOME TO" title="ShopBox Store"  />  
            <FeatureProduct/> 
            <OurProcess /> 
            <ClientLogo />
        </>
    )
}

export default HomePage