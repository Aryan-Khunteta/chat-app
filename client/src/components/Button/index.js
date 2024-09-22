import React from 'react'

const Button = ({
    label = 'Button',
    type = 'button',
    className = '',
    disabled = false,
}) => {
  return (
    <button type={type} className={`text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[250px] px-5 py-2.5 text-center ${className}`} disabled={disabled}>{label}</button>
  )
}

export default Button