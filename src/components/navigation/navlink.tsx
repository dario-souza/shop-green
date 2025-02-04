'use client'
import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}
export const NavLink = ({
  href,
  children,
  className,
  ...rest
}: NavLinkProps) => {
  const pathname = usePathname()
  const activePath = pathname === href
  return (
    <Link
      className={twMerge(
        'block px-4 py-2 rounded transition duration-300 ease-in-out',
        `${activePath && 'bg-emerald-600 text-white font-bold'}`,
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
