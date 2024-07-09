import React from 'react'
import { twMerge } from 'tailwind-merge'

type TitleCardProps = React.ComponentProps<'h2'>

export const TitleCard = ({ children, className, ...rest }: TitleCardProps) => {
  return (
    <h2
      {...rest}
      className={twMerge('text-center line-clamp-1 text-lg sm:text-2xl md:text-3xl font-bold', className)}>
      {children}
    </h2>
  )
}
