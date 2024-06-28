
'use client'
import React from 'react'
import Button from './button'
import { Product } from '@/types/products.type'
import Image from 'next/image'
import { TitleCard } from './titlecard'
import { PriceCard } from './pricecard'
import { StrongCard } from './strongcard'
import { convertToBRL } from '@/helper/convert.to.brl'
import { RemoveCart } from './icons/removecart'
import { AddCart } from './icons/addcart'
import Link from 'next/link'
import { useProductContext } from '@/app/contexts/product.context'

interface ProductCardProps {
  data: Product
  index: number
}

const ProductCard = ({ data, index }: ProductCardProps) => {
  const { toggleCart, cart } = useProductContext()
  const isInCart = cart.some(item => item.id === data.id);
  return (
    <div className='text-center border rounded-md p-2 sm:p-4'>
      <Image priority={index < 8} className='mx-auto h-28 md:h-[200px] object-contain' src={data.image} alt={data.title} width={1049} height={1500} sizes='(max-width: 700px) 33vw, 50vw' />
      <TitleCard className='mt-4'>{data.title}</TitleCard>
      <PriceCard>
        <StrongCard className='font-extrabold'>{convertToBRL(data.price)}</StrongCard>
      </PriceCard>
      <div className='flex justify-between mt-4'>
        <Link href={`/details/${data.id}`}>Ver mais</Link>
        <Button className='bg-transparent' onClick={() => toggleCart(data)}>{isInCart ? <RemoveCart /> : <AddCart />}</Button>
      </div>
    </div>
  )
}

export default ProductCard
