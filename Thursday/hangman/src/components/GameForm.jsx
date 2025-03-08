import React from 'react'

import Button from './Button'

export default function GameForm({ submit, letterGuess, setLetterGuess, counter }) {
  return (
    <div>
      <form 
            className='flex justify-center flex-col items-center p-4'
            onSubmit={(e) => submit(e)}  
          >
            <input
              type='text'
              value={letterGuess}
              onChange={(e)=> setLetterGuess(e.target.value.toUpperCase())}
              className='border-2 text-5xl rounded-sm w-12 text-center mb-2'
              maxLength={1}
              autoFocus
            />
            <Button className='border-2 rounded-sm w-16 text-center'>Submit</Button>
            <p>{counter+1} lives left</p>
          </form>
    </div>
  )
}
