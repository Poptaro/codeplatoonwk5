import React from 'react'

import Button from './Button'

export default function Win({ resetGame }) {
  return (
    <div className='text-center m-2'>
      <p className='text-center text-9xl text-green-400'>You Win</p>
      <Button onClickFunction={resetGame}>Reset Game</Button>
    </div>
  )
}
