import React from 'react'
import { twMerge } from 'tailwind-merge'

type PriceCardProps = React.ComponentProps<'span'>
export const PriceCard = ({ children, className, ...rest }: PriceCardProps) => {
  return (
    <span {...rest} className={twMerge('text-2xl md:text-3xl', className)}>{children}</span>
  )
}
