'use client'
import Image from 'next/image'
import React from 'react'
import { TitleCard } from '@/components/titlecard'
import { Description } from '@/components/description'
import { PriceCard } from '@/components/pricecard'
import { convertToBRL } from '@/helper/convert.to.brl'
import Button from '@/components/button'
import { Product } from '@/types/products.type'
import { useProductContext } from '@/app/contexts/product.context'
import { ButtonPrimary } from '../button.primary'

type CardDetailsProps = {
  data: Product
}

export const CardDetails = ({ data }: CardDetailsProps) => {
  const { cart, toggleCart } = useProductContext()
  const incart = cart.some(item => item.id === data.id)
  return (
    <div className='md:grid md:grid-cols-2 bg-white rounded-md border overflow-hidden'>
      <div className='p-4 flex items-center'>
        <Image className='object-contain mx-auto max-h-[500px]'
          src={data.image}
          alt={data.title}
          width={1049}
          height={1500}
          sizes='(max-width: 600px) 100vw, 50vw'
        />
      </div>
      <div className='pt-4 h-full'>
        <TitleCard
          className='line-clamp-2 mx-2 text-3xl sm:text-4xl md:font-extrabold md:line-clamp-4 md:text-5xl md:leading-tight'>
          {data.title}
        </TitleCard>
        <div className='bg-emerald-400 px-4 pb-4 border-t-4 sm:border-t-8 mt-2 border-black'>
          <Description
            className='font-semibold text-xl mt-1 md:text-3xl md:mt-4 mb-2 line-clamp-5 md:line-clamp-6 text-center'>
            {data.description}
          </Description>
          <PriceCard className='block text-center md:my-6'>
            <strong className='text-4xl md:text-5xl'>{convertToBRL(data.price)}</strong>
          </PriceCard>
          <ButtonPrimary onClick={() => toggleCart(data)}
            className={`w-full mt-2 ${incart ? 'bg-red-700' : 'bg-emerald-700'} rounded-md`}>
            {incart ? 'Remover' : 'Adicionar'}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
