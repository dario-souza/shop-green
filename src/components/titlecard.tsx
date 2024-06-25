import React from 'react'
import { twMerge } from 'tailwind-merge'

type TitleCardProps = React.ComponentProps<'h2'>

export const TitleCard = ({ children, className, ...rest }: TitleCardProps) => {
  return (
    <h2
      {...rest}
      className={twMerge('line-clamp-1 text-lg sm:text-xl md:text-2xl font-semibold', className)}>
      {children}
    </h2>
  )
}
