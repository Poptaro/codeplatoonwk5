import React from 'react'

export default function Button({ children, onClickFunction }) {
  return (
    <button 
      className='border-2 rounded-sm w-24 text-center text-2xl hover:bg-slate-200 active:border-red-300 active:bg-red-200' 
      onClick={onClickFunction}
    >
      {children}
    </button>
  )
}
