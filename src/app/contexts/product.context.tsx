'use client'

import useLocalStorage from "@/hooks/useLocalStorage"
import { Product } from "@/types/products.type"
import React, { createContext, useContext } from "react"

type ProductContextTypes = {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
  toggleCart: (item: Product) => void
  totalItemsInCart: () => number
}

const ProductContext = createContext<ProductContextTypes | null>(null)

const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useLocalStorage<Product[]>('carts', [])

  const totalItemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.price, 0)
  }

  const toggleCart = (itemCart: Product) => {
    setCart(prevItem => {
      const itemInCart = prevItem.some(item => item.id === itemCart.id)
      if (!itemInCart) {
        return [...prevItem, itemCart]
      }
      return prevItem.filter(item => item.id !== itemCart.id)
    })
  }
  return (
    <ProductContext.Provider value={{ cart, setCart, toggleCart, totalItemsInCart }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsContextProvider


export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (context === null) throw new Error('O Product context deve estar dentro do provider')
  return context
}

