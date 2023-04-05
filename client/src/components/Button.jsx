import React from 'react'

const Button = ({ text, type }) => {
  return (
    <button className='w-full bg-blue-600 text-white text-sm p-2 rounded-lg hover:bg-blue-700' type={ type }>
      { text }
    </button>
  )
}

export default Button