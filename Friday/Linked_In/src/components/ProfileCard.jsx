import React from 'react'

import user from '../assets/user.png'

export default function ProfileCard() {
  return (
    <>
      <div className='h-54 w-[65%] relative min-w-42'>
        <div className='bg-blue-200 h-[50%] rounded-t-xl'>

        </div>
        <img 
          src={user}
          className= 'ml-4 absolute items-center border-2 h-24 w-24 rounded-full top-[20%] bg-white border-hidden'
        />
          
        <div className='bg-white h-[50%] rounded-b-xl'>
          <div className='p-4 pt-8'>
            <p className='text-xl'>Noah Ahn</p>
            <p className='text-xs'>--</p>
          </div>
        </div>
      </div>
    </>

  )
}
