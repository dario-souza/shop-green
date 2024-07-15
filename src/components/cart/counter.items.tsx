'use client'
import { useProductContext } from '@/app/contexts/product.context'
import { Product } from '@/types/products.type'
import React from 'react'

type CounterItemProps = {
  item: Product
}

export const CounterItem = ({ item: cartItem }: CounterItemProps) => {
  const { updateCartItemQuantity } = useProductContext()
  const [count, setCount] = React.useState(1)


  const handleCountPlus = () => {
    const newCount = count + 1
    setCount(newCount)
    updateCartItemQuantity(cartItem, newCount)
  }

  const handleCountMinus = () => {
    const newCount = count - 1
    if (newCount < 1) {
      updateCartItemQuantity(cartItem, 0)
    } else {
      setCount(newCount)
      updateCartItemQuantity(cartItem, newCount)
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
