import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return(
        <>
            <div className="header_section bg-second-color py-3">
                <div className="container mx-auto">
                    <div className="header_area">
                        <div className="header_nav_area flex items-center justify-between">
                            <div className="header_logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="search_box relative">
                                <input className="w-[500px] border-2 border-second-color py-2 px-4 focus:outline-none focus:border-common-color rounded-md " type="text" placeholder="Search for items" />
                                <div className="search_icon absolute top-[10px] right-[15px] text-second-color">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                            <div className="header_menu">
                                <ul className="flex">
                                    <li>
                                        <NavLink to="/" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium text-[17px] py-3 px-7 rounded-md' : 'font-medium text-[17px] py-3 px-7 rounded-md'} >Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium text-[17px] py-3 px-7 rounded-md' : 'font-medium text-[17px] py-3 px-7 rounded-md'} >About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/product" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium text-[17px] py-3 px-7 rounded-md' : 'font-medium text-[17px] py-3 px-7 rounded-md'} >Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium text-[17px] py-3 px-7 rounded-md' : 'font-medium text-[17px] py-3 px-7 rounded-md'} >Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login" className=" hover:bg-black transition duration-500 font-medium bg-common-color text-[17px] py-[10px] text-white px-7 rounded-md " >Login</NavLink>
                                    </li>
                                    <li className="flex items-center">
                                        <NavLink to="/cart" className={(activeColor) => activeColor.isActive === true ? 'active-menu font-medium text-[17px] py-3 px-7 rounded-md' : ' font-medium text-[17px] py-3 px-7 rounded-md'} >
                                           <div className="flex relative">
                                            <span className=" absolute top-[-17px] right-[-14px] bg-common-color w-[25px] h-[25px] text-white text-center rounded-[30px] text-[12px] leading-[25px] " >9+</span>
                                           <FontAwesomeIcon icon={faCartShopping} />
                                           </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;