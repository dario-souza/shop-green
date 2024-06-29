'use client'
import Image from 'next/image'
import React from 'react'
import { TitleCard } from './titlecard'
import { Description } from './description.details'
import { PriceCard } from './pricecard'
import { StrongCard } from './strongcard'
import { convertToBRL } from '@/helper/convert.to.brl'
import Button from './button'
import { Product } from '@/types/products.type'
import { useProductContext } from '@/app/contexts/product.context'

type CardDetailsProps = {
  data: Product
}

export const CardDetails = ({ data }: CardDetailsProps) => {
  const { cart, toggleCart } = useProductContext()
  const incart = cart.some(item => item.id === data.id)
  return (
    <div className='md:grid md:grid-cols-2 gap-5 items-center'>
      <Image className='h-96 md:h-[500px] max-[765px]:mb-4 object-contain mx-auto' src={data.image} alt={data.title} width={1049} height={1500} sizes='(max-width: 600px) 100vw, 50vw' />
      <div className='bg-white rounded-lg border pt-4'>
        <TitleCard className='line-clamp-2 mx-2 text-3xl sm:text-4xl md:font-extrabold md:line-clamp-4 md:text-5xl md:leading-tight'>{data.title}</TitleCard>
        <div className='bg-emerald-400 px-4 pb-4 border-t-4 sm:border-t-8 mt-2 border-emerald-700 rounded-b-md'>
          <Description className='font-semibold text-xl mt-1 md:text-3xl md:mt-4 mb-2 line-clamp-5 md:line-clamp-6 text-center'>{data.description}</Description>
          <PriceCard className='block text-center md:my-6'>
            <StrongCard className='text-4xl md:text-5xl'>{convertToBRL(data.price)}</StrongCard>
          </PriceCard>
          <Button onClick={() => toggleCart(data)} className={`block mt-2 py-2 text-white md:text-3xl md:mt-4 text-xl font-bold w-full ${incart ? 'bg-red-700' : 'bg-emerald-700'} rounded-md`}>{incart ? 'Remover' : 'Adicionar'}</Button>
        </div>
      </div>
    </div>
  )
}
