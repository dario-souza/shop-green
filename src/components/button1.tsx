'use client'
import React from 'react'
interface Button1Props extends React.ComponentProps<'button'> {
  inCart: boolean
}

const Button1 = ({ children, inCart, ...rest }: Button1Props) => {


  return (
    <>
      <button {...rest}>
        {inCart ? 'Remover' : 'Adicionar'}
      </button>
    </>

  )
}

export default Button1