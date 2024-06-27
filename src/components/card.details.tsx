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



type CardDetailsProps = {
  data: Product
}
export const CardDetails = ({ data }: CardDetailsProps) => {

  return (
    <div className='md:grid md:grid-cols-2 gap-5 border'>
      <Image className='h-96 md:h-[600px] my-auto object-contain mx-auto' src={data.image} alt={data.title} width={1049} height={1500} sizes='(max-width: 600px) 100vw, 50vw' />
      <div className='bg-slate-300 rounded-lg p-4'>
        <TitleCard className='line-clamp-2 text-3xl md:font-extrabold md:line-clamp-4 md:text-5xl md:leading-tight'>{data.title}</TitleCard>
        <Description className='font-semibold mt-4 md:text-2xl md:mt-4 mb-2 line-clamp-5 md:line-clamp-6 text-center'>{data.description}</Description>
        <PriceCard className='block text-center md:mt-6'>
          <StrongCard className='text-6xl'>{convertToBRL(data.price)}</StrongCard>
        </PriceCard>
        <Button className='block mt-2 py-2 text-white md:text-3xl md:mt-4 text-xl font-bold w-full bg-green-500 rounded-md'>ADICIONAR</Button>
      </div>
    </div>
  )
}
