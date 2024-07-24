'use client'
import { useProductContext } from '@/app/contexts/product.context'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonPrimary } from './button.primary'


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
      <div className='p-4 max-w-96 border rounded flex flex-col content-center shadow-md bg-white'>
        <h2 className='text-center font-bold text-2xl border-b-2 border-black'>Parabéns! 🚀</h2>
        <p className='text-center py-4'>Foi gerado um pedido de número: <strong>{order}</strong> </p>
        <ButtonPrimary
          onClick={handleFinishPurchase}>
          Fechar
        </ButtonPrimary>
      </div>
    </div>
  )
}
