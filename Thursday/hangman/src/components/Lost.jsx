import React from 'react'
import Button from './Button'

export default function Lost({ word, resetGame }) {
  return ( 
    <div className='text-center text-3xl m-2'>
      <p>| ||</p>
      <p>|| |_</p> 
      <p>The word was <span className='text-3xl text-red-500'>{word}</span></p>
      <Button onClickFunction={resetGame}>Reset Game</Button>
    </div>
  )
}
