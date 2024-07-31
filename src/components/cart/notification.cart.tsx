import React from 'react'
import { twMerge } from 'tailwind-merge'

type NotificationCartProps = React.ComponentProps<'div'>

export const NotificationCart = ({ children, className, ...rest }: NotificationCartProps) => {
  return (
    <div className={twMerge('bg-white text-xs text-black py-1 px-2 rounded-full absolute top-[-5px] right-[-1px]', className)} {...rest}>
      {children}
    </div>
  )
}
