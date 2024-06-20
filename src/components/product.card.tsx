
import React from 'react'
// import Button from './button'
import { Product } from '@/types/products.type'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const Button = dynamic(() => import('./button'), { ssr: false })

interface ProductCardProps {
  data: Product
}

export const ProductCard = ({ data }: ProductCardProps) => {

  return (
    <div className='text-center border rounded-md p-2 sm:p-4'>
      <Image className='mx-auto h-28 md:h-[200px] object-contain' src={data.image} alt={data.title} width={1049} height={1500} sizes='(max-width: 600px) 100vw, 50vw' />
      <h2 className='line-clamp-1 text-3xl font-semibold'>{data.title}</h2>
      <span>R$: <strong className='text-2xl'>{data.price}</strong></span>
      <div className='flex justify-between'>
        <span>Ver mais</span>
        <Button data={data}>Adicionar ao carrinho</Button>
      </div>
    </div>
  )
}
