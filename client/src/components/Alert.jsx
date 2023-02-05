import React from 'react'

export const Alert = ({msg}) => {
  return (
    <div className='bg-red-600 text-center p-3 rounded-md uppercase text-while front-bold text-sm my-8'>
        {msg}
    </div>
  )
}
