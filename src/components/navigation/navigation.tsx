'use client'
import React from 'react'
import { Menu } from './menu.hamburguer'
import { NavLink } from '../navlink'

export const NavigationMenu = () => {
  const [menu, setMenu] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  // Função para lidar com cliques fora do menu
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenu(false)
    }
  }

  React.useEffect(() => {
    // Adiciona o evento de clique quando o menu está aberto
    if (menu) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    // Remove o evento de clique ao desmontar o componente
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menu])
  return (
    <nav className="">
      <button onClick={() => setMenu(!menu)} className="sm:hidden"><Menu /></button>
      <div className="hidden sm:flex gap-4">
        <NavLink className='hover:text-white font-bold' href="/">Home</NavLink>
        <NavLink href="/cart" className='hover:text-white font-bold'>Carrinho</NavLink>
      </div>
      <div ref={menuRef} className={`fixed p-4 z-50 top-[64px] right-0 w-4/5 h-[calc(100vh-64px)] bg-emerald-400 text-center transform transition-transform duration-300 ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
        <NavLink className='font-bold hover:text-white' href="/">Home</NavLink>
        <NavLink className='font-bold hover:text-white' href="/cart">Carrinho</NavLink>
      </div>
    </nav>
  )
}
