'use client'
import { Product } from '@/types/products.type'
import React from 'react'
import ProductCard from './product.card'
import useLocalStorage from '@/hooks/useLocalStorage'


type ProductsCardsProps = {
  product: Product[]
}

const ProductsCards = ({ product }: ProductsCardsProps) => {
  const [cart, setCart] = useLocalStorage<Product[]>('carts', [])

  const toggleCart = React.useCallback((itemCart: Product) => {
    setCart(prevItem => {
      const itemInCart = prevItem.some(item => item.id === itemCart.id)
      if (!itemInCart) {
        return [...prevItem, itemCart]
      }
      return prevItem.filter(item => item.id !== itemCart.id)
    })
  }, [setCart])
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

export default ProductsCards 
