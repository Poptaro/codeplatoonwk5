import React from 'react'

import FrontLetter from './FrontLetter'

export default function GameLetters({ game }) {
  return (
    <div className='flex flex-row justify-evenly mt-24'>
      {
        game.map((letter, index) => {
          return <FrontLetter letter={letter} key={index}/>
        })
      }
    </div>
  )
}
