import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/ProductContext.jsx'
import { FilterProductProvide } from './context/FilterProductContext.jsx'
import { CartProvider } from './context/cartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <FilterProductProvide>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProductProvide>
  </ProductProvider>
)
