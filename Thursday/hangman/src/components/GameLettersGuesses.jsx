import React from 'react'

export default function GameLettersGuesses({ displayGuesses }) {
  return (
    <div className='flex gap-3'>
          {
            displayGuesses.map((letter, index) => {
              return (
                <p className='text-6xl border-2 rounded-sm w-15 h-17 border-red-300 text-center' key={index}>{letter}</p>
              )
            })
          }
    </div>
  )
}
