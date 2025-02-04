'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'
const Button = ({
  children,
  className,
  ...rest
}: React.ComponentProps<'button'>) => {
  return (
    <button
      className={twMerge('block px-2 py-1 rounded bg-emerald-400', className)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
