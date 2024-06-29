'use client'
import React from 'react'
import { Menu } from './menu.hamburguer'
import { NavLink } from '../navlink'

export const NavigationMenu = () => {
  const [menu, setMenu] = React.useState(false)
  console.log(menu)
  return (
    <nav className="">
      <button onClick={() => setMenu(!menu)} className="sm:hidden"><Menu /></button>
      <div className="hidden sm:flex gap-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/cart">Carrinho</NavLink>
        <NavLink href="/about">Sobre</NavLink>
      </div>
      <div className={`fixed z-50 top-[64px] right-0 w-4/5 h-[calc(100vh-64px)] bg-emerald-400 text-center transform transition-transform duration-300 ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
        <NavLink className='hover:text-white' href="/">Home</NavLink>
        <NavLink className='hover:text-white' href="/cart">Carrinho</NavLink>
        <NavLink className='hover:text-white' href="/about">Sobre</NavLink>
      </div>
    </nav>
  )
}
