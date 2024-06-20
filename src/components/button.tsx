'use client'
import useLocalStorage from '@/hooks/useLocalStorage'

import { Product } from '@/types/products.type'
import React from 'react'


interface ButtonProps extends React.ComponentProps<'button'> {
  data: Product
}

const Button = ({ children, data, ...rest }: ButtonProps) => {
  const [item, setItem] = useLocalStorage('products', [])

  const handleClick = () => {
    // setItem([...item, data])
    console.log(data)
  }

  return (
    <button onClick={handleClick} className='block px-2 py-1 rounded bg-emerald-400' {...rest}>{children}</button>
  )
}

export default Button