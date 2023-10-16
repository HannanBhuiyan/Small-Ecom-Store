import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import Header from './components/header/Header'


const App = () => {
    return(
        <>
          <BrowserRouter>
          <Header /> 
             <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/single-product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
             </Routes>
          </BrowserRouter>
        </>
    )
}

export default App