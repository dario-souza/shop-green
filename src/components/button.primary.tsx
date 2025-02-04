import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = React.ComponentProps<'button'>

export const ButtonPrimary = ({
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'block bg-emerald-600 text-white shadow-md rounded py-2 px-4 font-bold mx-auto hover:text-white hover:bg-emerald-500 transition-colors duration-300',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
