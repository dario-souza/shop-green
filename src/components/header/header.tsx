import React from 'react'
import { twMerge } from 'tailwind-merge'

type HeaderProps = React.ComponentProps<'header'>

export const Header = ({ className, children, ...rest }: HeaderProps) => {
  return (
    <header className={twMerge('h-16 shadow-md fixed top-0 right-0 w-full z-50 bg-emerald-400', className)} {...rest}>
      {children}
    </header>
  )
}
