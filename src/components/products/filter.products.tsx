import React from 'react'

type FilterProductsProps = React.ComponentProps<'input'>

export const FilterProducts = ({ ...rest }: FilterProductsProps) => {
  return (
    <input
      className='block w-full text-center px-2 py-1 border my-4 mx-auto rounded-md shadow-md outline-none text-base sm:w-1/2'
      type="text"

      {...rest}
    />
  )
}
