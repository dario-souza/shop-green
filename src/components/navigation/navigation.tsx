'use client'
import React from 'react'
import { Menu } from './menu.hamburguer'
import { NavLink } from './navlink'
import { TbShoppingCart } from 'react-icons/tb'
import { useProductContext } from '@/app/contexts/product.context'
import { NotificationCart } from '../cart/notification.cart'

export const NavigationMenu = () => {
  const { cart } = useProductContext()
  const [menu, setMenu] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenu(false)
    }
  }

  React.useEffect(() => {
    if (menu) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menu])

  return (
    <nav className="">
      <button onClick={() => setMenu(!menu)} className="sm:hidden">
        <Menu size={25} className="relative" />
        <NotificationCart className="top-[10px] py-[2px] px-[4px] right-3">
          {cart.length}
        </NotificationCart>
      </button>
      <div className="hidden sm:flex gap-4">
        <NavLink className="hover:text-white font-bold" href="/">
          Home
        </NavLink>
        <NavLink
          href="/cart"
          className="hover:text-white font-bold block relative"
        >
          <TbShoppingCart size={25} />
          <NotificationCart>{cart.length}</NotificationCart>
        </NavLink>
      </div>
      <div
        ref={menuRef}
        className={`fixed p-4 z-50 top-[64px] right-0 w-4/5 h-[calc(100vh-64px)] bg-emerald-400 text-center transform transition-transform duration-300 ${
          menu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <NavLink className="font-bold hover:text-white" href="/">
          Home
        </NavLink>
        <NavLink
          className="font-bold hover:text-white flex items-center"
          href="/cart"
        >
          <TbShoppingCart className="mx-auto relative" size={25} />
          {cart.length}
        </NavLink>
      </div>
    </nav>
  )
}
