'use client'
import React from 'react'
const Button = ({ children, ...rest }: React.ComponentProps<'button'>) => {
  return (
    <button className='block px-2 py-1 rounded bg-emerald-400' {...rest}>{children}</button>
  )
}

export default Button