'use client'

import useLocalStorage from "@/hooks/useLocalStorage"
import { Product } from "@/types/products.type"
import React, { createContext, useContext } from "react"

type ProductContextTypes = {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
  toggleCart: (item: Product) => void
  updateCartItemQuantity: (item: Product, quantity: number) => void
}

const ProductContext = createContext<ProductContextTypes | null>(null)

const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useLocalStorage<Product[]>('carts', [])

  const updateCartItemQuantity = (item: Product, quantity: number) => {
    if (quantity < 1) {
      setCart(prevItem => prevItem.filter(cartItem => cartItem.id !== item.id))
    } else {
      setCart(prevItem => {
        return prevItem.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        )
      })
    }
  }

  const toggleCart = (itemCart: Product) => {
    setCart(prevItem => {
      const itemInCart = prevItem.some(item => item.id === itemCart.id)
      if (!itemInCart) {
        const newItemCart = { ...itemCart, quantity: 1 }
        return [...prevItem, newItemCart]
      }
      return prevItem.filter(item => item.id !== itemCart.id)
    })
  }
  return (
    <ProductContext.Provider value={{ cart, setCart, toggleCart, updateCartItemQuantity }}>
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

