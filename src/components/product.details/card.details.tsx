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
import Link from 'next/link'

type CardDetailsProps = {
  data: Product
}

export const CardDetails = ({ data }: CardDetailsProps) => {
  const { cart, toggleCart } = useProductContext()
  const incart = cart.some((item) => item.id === data.id)
  return (
    <div className="md:grid md:grid-cols-2 bg-white rounded-md border overflow-hidden p-4 max-w-[800px] gap-6">
      <Image
        className="mx-auto w-auto max-h-[300px] place-self-center"
        src={data.image}
        alt={data.title}
        width={1049}
        height={1500}
        sizes="(max-width: 600px) 100vw, 50vw"
      />

      <div className="h-max place-self-center">
        <TitleCard className="text-lg md:text-2xl border-b-2 md:border-b-4 border-emerald-700">
          {data.title}
        </TitleCard>

        <Description>{data.description}</Description>
        <PriceCard className="block text-center">
          <strong className="text-2xl">{convertToBRL(data.price)}</strong>
        </PriceCard>
        <ButtonPrimary
          onClick={() => toggleCart(data)}
          className={`w-full mt-2 ${
            incart ? 'bg-red-700' : 'bg-emerald-700'
          } rounded-md`}
        >
          {incart ? 'Remover' : 'Adicionar'}
        </ButtonPrimary>
        <Link href="/" className="block text-emerald-700 text-center mt-2">
          Continuar comprando
        </Link>
      </div>
    </div>
  )
}
