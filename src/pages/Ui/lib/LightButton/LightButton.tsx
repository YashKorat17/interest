import React, { ButtonHTMLAttributes } from 'react'

const LightButton = (props:ButtonHTMLAttributes<HTMLButtonElement>) => 
{
  return (
    <button className='light_button' 
    {...props}
    >
        {props.children}
    </button>
  )
}

export default LightButton
