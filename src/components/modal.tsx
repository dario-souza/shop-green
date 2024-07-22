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
      <div className='p-4 sm:w-2/6 w-1/2 rounded bg-emerald-600 flex flex-col content-center'>
        <h2 className='text-center font-bold text-2xl'>Parabéns!!!</h2>
        <p className='text-center py-4'>Foi gerado um pedido de número: <strong>{order}</strong> </p>
        <Button className='font-bold' onClick={handleFinishPurchase}>Fechar</Button>
      </div>
    </div>
  )
}
