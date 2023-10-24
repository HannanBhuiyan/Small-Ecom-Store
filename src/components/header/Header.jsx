import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/cartContext";

const Header = () => {

    const { cart } = useCartContext()


    return(
        <>
            <div className="header_section bg-second-color py-3">
                <div className="container mx-auto">
                    <div className="header_area max-lg:hidden">
                        <div className="header_nav_area flex items-center justify-between">
                            <div className="header_logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="search_box relative">
                                <input className="w-[500px] max-xl:w-[300px] border-2 border-second-color py-2 px-4 focus:outline-none focus:border-common-color rounded-md " type="text" placeholder="Search for items" />
                                <div className="search_icon absolute top-[10px] right-[15px] text-second-color">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                            <div className="header_menu">
                                <ul className="flex">
                                    <li>
                                        <NavLink to="/" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md' : 'font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md'} >Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md' : 'font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md'} >About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/product" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md' : 'font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md'} >Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md' : 'font-medium max-xl:text-[16px] text-[17px]  py-3 px-7 max-xl:px-5 rounded-md'} >Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login" className=" hover:bg-black transition duration-500 font-medium bg-common-color max-xl:text-[16px] text-[17px]  py-[10px] text-white px-7 rounded-md " >Login</NavLink>
                                    </li>
                                    <li className="flex items-center">
                                        <NavLink to="/cart" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium text-[17px] py-3 px-7 rounded-md' : ' font-medium text-[17px] py-3 px-7 rounded-md'} >
                                           <div className="flex relative">
                                            <span className=" absolute top-[-17px] right-[-14px] bg-common-color w-[25px] h-[25px] text-white text-center rounded-[30px] text-[12px] leading-[25px] " >{cart ? cart.length : 0 }</span>
                                           <FontAwesomeIcon icon={faCartShopping} />
                                           </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile_menu lg:hidden">
                    <div className="mobile_menu_top flex items-center justify-between">
                        <div className="mobile_menu_logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="mobile_menu_bar flex items-center">
                            <span> <FontAwesomeIcon icon={faBars} /> </span>
                            <div className="flex">
                                <NavLink to="/cart" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium text-[17px] py-3 px-7 rounded-md' : ' font-medium text-[17px] py-3 px-7 rounded-md'} >
                                    <div className="flex relative">
                                    <span className=" absolute top-[-17px] right-[-14px] bg-common-color w-[25px] h-[25px] text-white text-center rounded-[30px] text-[12px] leading-[25px] " >9+</span>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <ul className="">
                        <li>
                            <NavLink to="/" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b ' : 'font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b '} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b ' : 'font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b '} >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b ' : 'font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b '} >Product</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b ' : 'font-medium max-xl:text-[16px] text-[17px]  py-4 px-7 max-xl:px-5 rounded-md  block text-center border-b '} >Contact</NavLink>
                        </li>
                        <div className="search_box relative text-center border-b py-4">
                            <input className="w-[500px] max-xl:w-[300px] border-2 border-second-color py-2 px-4 focus:outline-none focus:border-common-color rounded-md " type="text" placeholder="Search for items" />
                            <div className="search_icon absolute top-[10px] right-[15px] text-second-color">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                        <li className="text-center" >
                            <NavLink to="/login" className=" hover:bg-black transition duration-500 font-medium bg-common-color max-xl:text-[16px] text-[17px]  py-[10px] mt-[12px] mb-[8px] inline-block text-white px-7 rounded-md " >Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;