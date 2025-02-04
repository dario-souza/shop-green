'use client'
import React from 'react'
import Button from '../button'
import { Product } from '@/types/products.type'
import Image from 'next/image'
import { TitleCard } from '../titlecard'
import { PriceCard } from '../pricecard'
import { convertToBRL } from '@/helper/convert.to.brl'
import { RemoveCart } from '../icons/removecart'
import { AddCart } from '../icons/addcart'
import Link from 'next/link'
import { useProductContext } from '@/app/contexts/product.context'

interface ProductCardProps {
  data: Product
  index: number
}

const ProductCard = ({ data, index }: ProductCardProps) => {
  const { toggleCart, cart } = useProductContext()
  const isInCart = cart.some((item) => item.id === data.id)
  return (
    <div
      className={`text-center border bg-white rounded-md p-2 overflow-hidden shadow-md ${
        isInCart && 'ring-4 ring-emerald-700'
      }`}
    >
      <Image
        priority={index < 8}
        className="mx-auto h-[125px] w-auto"
        src={data.image}
        alt={data.title}
        width={1049}
        height={1500}
        sizes="(max-width: 700px) 33vw, 50vw"
      />
      <TitleCard className="border-b-2 line-clamp-1 border-emerald-700">
        {data.title}
      </TitleCard>
      <PriceCard>
        <strong>{convertToBRL(data.price)}</strong>
      </PriceCard>
      <div className="flex justify-between items-end mb-0">
        <Link
          className="block hover:text-white transition ease-in-out duration-300"
          href={`/details/${data.id}`}
        >
          Ver mais
        </Link>
        <Button className="bg-transparent" onClick={() => toggleCart(data)}>
          {isInCart ? <RemoveCart /> : <AddCart />}
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
