import React from 'react'

export default function CallToAction({
  title,
  backgroundColor,
  handleClick,
}) {
  const colorVariants = {
    green: 'bg-green-600 hover:bg-green-500',
    red: 'bg-red-600 hover:bg-red-500',
  }
  return (
    <button
      type='button'
      className={`p-4 outline-1 w-60 rounded-2xl ${colorVariants[backgroundColor]}`}
      onClick={handleClick}
    >
      <p className='text-white text-lg'>{title}</p>
    </button>
  )
}
