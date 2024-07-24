import React from 'react'
import { CardDetails } from '@/components/product.details/card.details'
import { Container } from '@/components/container'
import { baseUrl, fetchDataProducts } from '@/services/api/fetch.data'
import { Product } from '@/types/products.type'

type ProductDetailsProps = {
  params: {
    id: string
  }
}

const ProductDetails = async ({ params: { id } }: ProductDetailsProps) => {
  const data = await fetchDataProducts<Product>(`${baseUrl}/${id}`)
  return (
    <Container className='h-[calc(100vh-64px)] flex justify-center items-center'>
      <CardDetails data={data} />
    </Container>
  )
}

export default ProductDetails
