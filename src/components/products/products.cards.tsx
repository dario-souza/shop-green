'use client'
import { Product } from '@/types/products.type'
import React from 'react'
import ProductCard from './product.card'

type ProductsCardsProps = {
  product: Product[]
}

const ProductsCards = ({ product }: ProductsCardsProps) => {
  const [value, setValue] = React.useState('')

  const filteredProduct = React.useMemo(() => {
    const lowercaseText = value.toLowerCase()
    return product.filter(item => item.title.toLowerCase().includes(lowercaseText))
  }, [product, value])

  const handleChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value)
  }, [])

  return (
    <>
      <input
        className='block w-full text-center px-2 py-1 border my-4 mx-auto rounded-md shadow-md outline-none text-base sm:w-1/2'
        placeholder='Busque um produto'
        type="text"
        value={value}
        onChange={handleChange}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 min-[950px]:grid-cols-5 gap-2 md:gap-4">
        {
          filteredProduct.map((prod, i) => (
            <ProductCard index={i} key={prod.id} data={prod} />
          ))
        }
      </div>
    </>
  )
}

export default ProductsCards 
