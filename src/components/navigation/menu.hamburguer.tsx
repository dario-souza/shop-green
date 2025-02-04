import React from 'react'
import { IconType } from 'react-icons'
import { GiHamburgerMenu } from 'react-icons/gi'
import { twMerge } from 'tailwind-merge'

export const Menu = ({
  className,
  ...rest
}: React.ComponentProps<IconType>) => {
  return (
    <GiHamburgerMenu
      className={twMerge(
        'hover:text-white transition-all duration-300',
        className
      )}
      {...rest}
    />
  )
}
