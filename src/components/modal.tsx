'use client'
import { useProductContext } from '@/app/contexts/product.context'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Button from './card/button'


type ModalProps = {
  open: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ open, setModal }: ModalProps) => {
  const { setCart } = useProductContext()
  const order = Math.floor(Math.random() * 1000000)

  const handleFinishPurchase = () => {
    setCart([])
    setModal(!open)
  }

  return (
    <div className={twMerge('fixed w-full h-screen top-0 left-0 z-50 flex items-center justify-center backdrop-blur-md', !open && 'hidden')}>
      <div className='w-52 h-52 rounded bg-emerald-600 flex flex-col content-center'>
        <h1 className='text-center font-bold'>Parabéns!!!</h1>
        <p className='text-center'>Foi gerado um pedido de número: <strong>{order}</strong> </p>
        <Button onClick={handleFinishPurchase}>Fechar</Button>
      </div>
    </div>
  )
}
