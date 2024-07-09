import React from 'react'
import { twMerge } from 'tailwind-merge'

type PriceCardProps = React.ComponentProps<'span'>
export const PriceCard = ({ children, className, ...rest }: PriceCardProps) => {
  return (
    <span {...rest} className={twMerge('text-2xl', className)}>{children}</span>
  )
}
