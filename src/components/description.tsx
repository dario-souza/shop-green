import React from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionProps = React.ComponentProps<'p'>
export const Description = ({ children, className, ...rest }: DescriptionProps) => {
  return (
    <p
      className={twMerge('text-center my-2 md:text-lg', className)} {...rest}>{children}</p>
  )
}
