'use client'
import React from 'react'
import { Container } from '../container'
import { useProductContext } from '@/app/contexts/product.context'
import Image from 'next/legacy/image'
import { TitleCard } from '../card/titlecard'
import { PriceCard } from '../card/pricecard'
import { convertToBRL } from '@/helper/convert.to.brl'
import { CounterItem } from './counter.items'
import Button from '../card/button'
import { Modal } from '../modal'

export const CartItems = () => {
  const { cart } = useProductContext()
  const [openModal, setOpenModal] = React.useState(false)
  const totalItems = cart.length
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <>
      <p className='text-center mt-4 font-bold'>{totalItems === 0 && 'Carrinho vazio 😿😢😿😢'}</p>
      <Container className='grid grid-cols-1 overflow-auto auto-rows-[150px] md:grid-cols-2 min-[1060px]:grid-cols-3 gap-4 mt-4] h-[calc(100vh-(231px+64px))] py-4'>
        {cart.map((item, index) => (
          <div key={item.id} className='bg-white grid grid-cols-3 shadow-md p-3 rounded-md'>
            <div className='relative col-span-1 mr-3'>
              <Image
                className='object-contain'
                src={item.image}
                layout='fill'
                alt={item.description}
                sizes='(max-width: 1280px) 15vh, 50vh'
                priority={index < 7}
              />
            </div>
            <div className='col-span-2 flex flex-col justify-between'>
              <TitleCard className='line-clamp-2 border-b-2 border-emerald-600 md:text-lg'>{item.title}</TitleCard>
              <div className='flex justify-between mt-4'>
                <div className='flex gap-1 mr-1 items-center'>
                  <CounterItem item={item} />
                </div>
                <PriceCard className='bg-emerald-600 md:text-xl px-1 rounded-sm lg:text-xl'>
                  <strong>{convertToBRL(item.price)}</strong>
                </PriceCard>
              </div>
            </div>
          </div>
        ))}

      </Container>
      <div className='border h-[25vh] fixed bottom-0 left-0 right-0 w-full bg-emerald-400'>
        <Container>
          <span className='block text-center mt-4'>Você tem <strong>{totalItems}</strong> itens em seu carrinho </span>
          <h1 className='text-center font-bold text-2xl sm:text-3xl md:text-5xl'>Total: {convertToBRL(total)} </h1>
          {totalItems > 0 &&
            <button onClick={() => setOpenModal(!openModal)}
              className='block bg-emerald-600 rounded py-2 px-4 font-bold mx-auto hover:text-white
           hover:bg-emerald-500 transition-colors duration-300'
            >
              Finalizar Compra
            </button>}

        </Container>
      </div>
      <Modal open={openModal} setModal={setOpenModal} />
    </>
  )
}
