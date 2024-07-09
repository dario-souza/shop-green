import React from 'react'

type DescriptionProps = React.ComponentProps<'p'>
export const Description = ({ children, ...rest }: DescriptionProps) => {
  return (
    <p {...rest}>{children}</p>
  )
}
