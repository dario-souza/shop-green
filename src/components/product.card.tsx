import React from 'react'
import Button from './button'

export const ProductCard = () => {
  return (
    <div className='text-center'>
      <h2>title</h2>
      <p>descrição</p>
      <span>Preço: <strong>10.00</strong></span>
      <Button>Adicionar ao carrinho</Button>
    </div>
  )
}
