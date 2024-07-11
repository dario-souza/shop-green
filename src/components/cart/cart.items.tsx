'use client'
import React from 'react'
import { Container } from '../container'
import { useProductContext } from '@/app/contexts/product.context'
import Image from 'next/image'
import { TitleCard } from '../card/titlecard'
import { PriceCard } from '../card/pricecard'
import { convertToBRL } from '@/helper/convert.to.brl'

export const CartItems = () => {
  const { cart } = useProductContext()
  return (
    <>
      <Container className='grid grid-cols-1 overflow-auto auto-rows-[150px] sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4] h-[calc(100vh-310px)]'>
        {cart.map(item => (
          <div key={item.id} className='grid grid-cols-3 shadow-md p-3 rounded-md'>
            <div className='relative col-span-1 mr-3'>
              <Image
                className='object-contain'
                src={item.image}
                layout='fill'
                alt={item.description}
              />
            </div>
            <div className='col-span-2 flex flex-col justify-between'>
              <TitleCard className='line-clamp-2 text-2xl border-b-2 border-emerald-600'>{item.title}</TitleCard>
              <div className='flex justify-between mt-4'>
                <div className='flex gap-1 mr-1'>
                  <button className='flex bg-emerald-600 justify-center pb-1 items-center px-[10px] font-semibold rounded text-2xl'>-</button>
                  <button className='flex bg-emerald-600 justify-center pb-1 items-center px-2 font-semibold rounded text-2xl'>+</button>
                </div>
                <PriceCard className='bg-emerald-600 px-2 rounded-sm'>
                  <strong>{convertToBRL(item.price)}</strong>
                </PriceCard>
              </div>
            </div>
          </div>
        ))}

      </Container>
      <div className='border h-[25vh] fixed bottom-0 left-0 right-0 w-full bg-emerald-400'>

      </div>
    </>
  )
}
