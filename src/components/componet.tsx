'use client'
import { IProdFake } from '@/types/prodfake'
import React from 'react'
import Button1 from './button1'

const items: IProdFake[] = [
  { id: 1, age: 45, name: 'DArio' },
  { id: 2, age: 43, name: 'Joãozinho' },
  { id: 3, age: 4, name: 'Mariana gostosa' },
  { id: 4, age: 10, name: 'Coisinha' }
]

export const ComponentA = () => {
  const [cart, setCart] = React.useState<IProdFake[]>([])

  const toggleCart = (prod: IProdFake) => {
    const isCart = cart.some(item => item.id === prod.id)
    if (isCart) {
      setCart(cart.filter(item => item.id !== prod.id))
    } else {
      setCart([...cart, prod])
    }
  }

  console.log(cart)

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          <Button1 className='px-4 py-2 bg-red-400 rounded'
            onClick={() => toggleCart(item)}
            inCart={cart.some(cartItem => cartItem.id === item.id)}
          />
        </div>
      ))}

      <ul>
        {cart && cart.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

