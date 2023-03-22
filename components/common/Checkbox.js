import React from 'react'
import Input from './Input'

export const Checkbox = ({ children, error, label, ...props }) => {
  return (
    <>
      <div className='flex gap-1 items-center justify-center'>
        <Input fullwidth={false} {...props} />
        {label ? <label>{label}</label> : children}
      </div>
      {Boolean(error) && <span className='text-red'>{error}</span>}
    </>
  )
}
