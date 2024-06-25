import React from 'react'
import { twMerge } from 'tailwind-merge'

type StrongCardProps = React.ComponentProps<'strong'>

export const StrongCard = ({ children, className, ...rest }: StrongCardProps) => {
  return (
    <strong className={twMerge('', className)} {...rest}>{children}</strong>
  )
}
