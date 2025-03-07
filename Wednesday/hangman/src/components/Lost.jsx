import React from 'react'

export default function Lost({ word }) {
  return ( 
    <div className='text-center text-3xl'>
      <p>| ||</p>
      <p>|| |_</p> 
      <p>The word was <span className='text-3xl text-red-500'>{word}</span></p>
    </div>
  )
}
