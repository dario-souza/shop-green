import React from 'react'
import { twMerge } from 'tailwind-merge'


type ModalProps = {
  open: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ open, setModal }: ModalProps) => {
  return (
    <div className={twMerge('fixed w-full h-screen top-0 left-0 z-50 flex items-center justify-center backdrop-blur-md', !open && 'hidden')}>
      <div className='w-52 h-52 rounded bg-emerald-600' onClick={() => setModal(!open)}>
        {/* Conteúdo do modal */}
      </div>
    </div>
  )
}
