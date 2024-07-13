'use client'
import { useProductContext } from '@/app/contexts/product.context'
import { Product } from '@/types/products.type'
import React from 'react'

type CounterItemProps = {
  item: Product
}

export const CounterItem = ({ item: cartItem }: CounterItemProps) => {
  const { cart, setCart } = useProductContext()
  const [count, setCount] = React.useState(1)


  const handleCountPlus = () => {
    setCount(prev => prev + 1)

  }
  const handleCountMinus = () => {
    setCount(prev => {
      return prev < 2 ? 1 : prev - 1
    })

    if (count < 2) {
      setCart(prev => prev.filter(itemCart => {
        if (itemCart.id !== cartItem.id) {
          return itemCart
        }
      }))
    }
  }
  return (
    <>
      <button
        onClick={handleCountMinus}
        className='flex bg-emerald-600 justify-center pb-1 items-center px-[10px] font-semibold rounded text-2xl'
      >
        -
      </button>
      {count}
      <button
        onClick={handleCountPlus}
        className='flex bg-emerald-600 justify-center pb-1 items-center px-2 font-semibold rounded text-2xl'
      >
        +
      </button>
    </>
  )
}
