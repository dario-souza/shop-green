'use client'
import { Product } from '@/types/products.type'
import React from 'react'
import { ProductCard } from './product.card'


type ProductsCardsProps = {
  product: Product[]
}

export const ProductsCards = ({ product }: ProductsCardsProps) => {
  const [cart, setCart] = React.useState<Product[]>([])

  const toggleCart = (itemCart: Product) => {
    setCart(prevItem => {
      const itemInCart = prevItem.some(item => item.id === itemCart.id)
      if (!itemInCart) {
        return [...prevItem, itemCart]
      }
      return prevItem.filter(item => item.id !== itemCart.id)
    })
  }

  console.log(cart)

  return (
    <>
      {
        product.map(prod => (
          <ProductCard cart={cart} toggleCart={toggleCart} key={prod.id} data={prod} />
        ))
      }
    </>
  )
}
