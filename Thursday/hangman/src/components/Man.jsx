import React from 'react'

import Sad from '../assets/Sad.png'
import Happy from '../assets/Happy.png'

export default function Man({ counter, win }) {

  return (
    <div className='flex justify-center mt-4 relative m-0'>
      <div className='h-56 w-48 bg-red-400 relative'>
        
        {/* Spacer for top */}
        <div className='h-6'/>
        {/* pole */}
        <div className='border-2 h-48 w-2 bg-black left-6 absolute'/>
        {/* pole-base */}
        <div className='border-2 h-3 w-48 bg-black bottom-0 absolute'/>
        {/* pole-arm-top */}
        <div className='border-2 h-2 w-19 bg-black left-6 absolute'/>
        {/* pole-arm-hanger */}
        <div className='border-2 h-8 w-2 bg-black left-23.5 absolute'/>
        
        {/* head */}
        {
          win
          ?  <img className={`border-1 h-8 w-8 bg-white absolute rounded-full left-20.5 top-12`} style={{ zIndex: -(counter-5 + 1) }} src={Happy}/>
          :  <img className={`border-1 h-8 w-8 bg-white absolute rounded-full left-20.5 top-12`} style={{ zIndex: -(counter-5 + 1) }} src={Sad}/>
        }
        {/* left arm */}
        <div className={`border-1 h-12 w-1 bg-black absolute left-20 top-16 rotate-45`} style={{ zIndex: -(counter-5 + 2) }}/>
        {/* right arm */}
        <div className={`border-1 h-12 w-1 bg-black absolute left-28 top-16 rotate-135`} style={{ zIndex: -(counter-5 + 3) }}/>
        {/* torso */}
        <div className={`border-1 h-16 w-1 bg-black absolute left-24 top-16`} style={{ zIndex: -(counter-5 + 4) }}/>
        {/* left leg */}
        <div className={`border-1 h-12 w-1 bg-black absolute left-20 bottom-14 rotate-45`} style={{ zIndex: -(counter-5 + 5) }}/>
        {/* right leg */}
        <div className={`border-1 h-12 w-1 bg-black absolute left-28 bottom-14 rotate-135`} style={{ zIndex: -(counter-5 + 6) }}/>

      </div>
    </div>
  )
}
