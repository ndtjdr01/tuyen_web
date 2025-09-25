import React, { createContext, useEffect, useState } from 'react'
import {products} from '../assets/asset.js'
export const ProductContext = createContext(null)

const ProductGolobal = ({ children }) => {
  const [cartItems, setCartItems] = useState({})
  const [token, setToken] = useState(null)    
  const [Products,setProducts] = useState(products)
  const [isLogin,setIsLogin] = useState(false)
  // cart
  const getCartItems = async (token) => {
    try {
      setLoading(true)
      const response = await axios.post(`${API_BASE_URL}/api/user/cart/get`, {}, { headers: { token } })
      setCartItems(response.data.data.cartItems)
    } catch (error) {
      setError(true)
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }
  const addToCart = async (id) => {
    const token = localStorage.getItem('token')
    if (!token){setIsLogin(true);return}
    let cart = {...cartItems};  
    if(cart[id]>0){
      cart[id]+=1
    }
    else{
      cart[id]=1
    }
    setCartItems(cart)
    try {
      const response = await axios.post(`${API_BASE_URL}/api/user/cart/add`, { item: cart }, { headers: { token } })
      console.log(response.data.user.cartItems)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  const removeToCart = async (id) => {
    const token = localStorage.getItem('token')
    let cart = {...cartItems};  
    if(cart[id]>1){
      cart[id]-=1
    }
    else{
      delete cart[id]
    }
    setCartItems(cart)
    try {
      const response = await axios.post(`${API_BASE_URL}/api/user/cart/add`, { item: cart }, { headers: { token } })
      // console.log(response.data.user.cartItems)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
// product
  const getProduct = async()=>{
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE_URL}/api/product/`)
      if(response){
        setProduct_lists(response.data)
      }
    } catch (error) {
      setError(true)
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }
  
  const context = {
    Products,
    setToken,
    token,
    cartItems,
    setCartItems,
    addToCart,
    removeToCart,
    isLogin,
    setIsLogin,
  }

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductGolobal
