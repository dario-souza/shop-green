import React from 'react'
interface ButtonProps extends React.ComponentProps<'button'> { }

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className='px-2 py-1 rounded bg-emerald-400' {...rest}>{children}</button>
  )
}

export default Button