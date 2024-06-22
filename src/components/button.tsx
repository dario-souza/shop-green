'use client'
import useLocalStorage from '@/hooks/useLocalStorage'

import { Product } from '@/types/products.type'
import React from 'react'


interface ButtonProps extends React.ComponentProps<'button'> {
  data: Product
  addedToCart: (item: Product) => void
  cart: Product[]
}

const Button = ({ children, data, addedToCart, ...rest }: ButtonProps) => {
  const [cart, setCart] = React.useState<Product[]>([])
  const [item, setItem] = useLocalStorage('products', '')

  const handleClick = () => {
    addedToCart(data)
  }

  console.log(cart)

  return (
    <button onClick={handleClick} className='block px-2 py-1 rounded bg-emerald-400' {...rest}>{children}</button>
  )
}

export default Button