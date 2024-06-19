'use client'
import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}
export const NavLink = ({ href, children, className, ...rest }: NavLinkProps) => {
  const pathname = usePathname()
  const activePath = pathname === href
  return (
    <Link
      className={twMerge('block px-4 py-2 bg-fuchsia-400 rounded', `${activePath && 'bg-emerald-300'}`, className)}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
