import React from 'react'

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
              className='border-2 text-5xl rounded-sm w-12 text-center'
              maxLength={1}
            />
            <button className='border-2 rounded-sm w-16 text-center'>Submit</button>
            <p>{counter} lives left</p>
          </form>
    </div>
  )
}
