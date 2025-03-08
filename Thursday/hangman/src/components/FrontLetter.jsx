import React from 'react'

import { useState, useEffect } from 'react'

export default function FrontLetter({ letter }) {

  const [solved, setSolved] = useState(false)

  useEffect(() => {
    setSolved(letter !== '_')
  }, [letter])

  return (
    <>
      {
        solved
        ?
        <p className='text-6xl border-2 rounded-sm w-15 h-17 text-center border-green-300'>{letter}</p>
        :
        <p className='text-6xl border-2 rounded-sm w-15 h-17 text-center'></p>
      }
    </>
  )
}
