import React from 'react'
import { twMerge } from 'tailwind-merge'

type TitleCardProps = React.ComponentProps<'h2'>

export const TitleCard = ({ children, className, ...rest }: TitleCardProps) => {
  return (
    <h2
      className={twMerge('text-center sm:text-lg font-bold my-2', className)}
      {...rest}
    >
      {children}
    </h2>
  )
}
