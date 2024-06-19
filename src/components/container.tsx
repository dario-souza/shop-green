import React from 'react'
import { twMerge } from 'tailwind-merge'
interface ContainerProps extends React.ComponentProps<'div'> { }

export const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={twMerge('max-w-7xl mx-auto px-4 md:px-6', className)} {...rest}>
      {children}
    </div>
  )
}
