'use client'
import { Product } from '@/types/products.type'
import React from 'react'
import ProductCard from './product.card'

type ProductsCardsProps = {
  product: Product[]
}

const ProductsCards = ({ product }: ProductsCardsProps) => {
  return (
    <>
      {
        product.map((prod, i) => (
          <ProductCard index={i} key={prod.id} data={prod} />
        ))
      }
    </>
  )
}

export default ProductsCards 
