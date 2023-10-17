import React from "react";
import client_01 from '../../assets/images/client_01.png'
import client_02 from '../../assets/images/client_02.png'
import client_03 from '../../assets/images/client_03.png'
import client_04 from '../../assets/images/client_04.png'
import client_05 from '../../assets/images/client_05.png'
import client_06 from '../../assets/images/client_06.png'

const ClientLogo = () => {
    return(
        <>
            <div className="client_logo_section mb-[100px] bg-second-color py-[80px]">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="  text-[30px] font-poppins font-semibold text-title-color mb-[20px] max-sm:text-[30px] ">Trusted by 1000+ Companys </p>
                    </div>
                    <div className="client_logo_area max-xl:mt-[30px]">
                        <div className="client_logo_ineer grid grid-cols-6 max-xl:grid-cols-3 items-center justify-between max-sm:grid-cols-1 ">
                            <div className="logo_img max-xl:mx-auto max-xl:mb-5 max-sm:mb-[30px]">
                                <img src={client_01} alt="" />
                            </div>
                            <div className="logo_img max-xl:mx-auto max-xl:mb-5 max-sm:mb-[30px]">
                                <img src={client_02} alt="logo image" />
                            </div>
                            <div className="logo_img max-xl:mx-auto max-xl:mb-5 max-sm:mb-[30px]">
                                <img src={client_03} alt="logo image" />
                            </div>
                            <div className="logo_img max-xl:mx-auto max-xl:mb-5 max-sm:mb-[30px]">
                                <img src={client_04} alt="logo image" />
                            </div>
                            <div className="logo_img max-xl:mx-auto max-xl:mb-5 max-sm:mb-[30px]">
                                <img src={client_05} alt="logo image" />
                            </div>
                            <div className="logo_img max-xl:mx-auto max-xl:mb-5 max-sm:mb-[30px]">
                                <img src={client_06} alt="logo image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientLogo