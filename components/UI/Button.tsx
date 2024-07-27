import React, { DOMAttributes } from 'react'

interface ButtonProps {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({text, onClick}: ButtonProps) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button