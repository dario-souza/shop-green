'use client'
import React from 'react'

export const CounterItem = () => {
  const [count, setCount] = React.useState(1)

  const handleCountPlus = () => {
    setCount(prev => prev + 1)
  }
  const handleCountMinus = () => {
    setCount(prev => prev - 1)
  }
  return (
    <>
      <button onClick={handleCountMinus} className='flex bg-emerald-600 justify-center pb-1 items-center px-[10px] font-semibold rounded text-2xl'>-</button>
      {count}
      <button onClick={handleCountPlus} className='flex bg-emerald-600 justify-center pb-1 items-center px-2 font-semibold rounded text-2xl'>+</button>
    </>
  )
}
