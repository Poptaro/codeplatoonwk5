import React from 'react'

import icon from '../assets/li.png'

import searchIcon from '../assets/magnifying-glass.png'

import home from '../assets/home.png'
import group from '../assets/group.png'
import briefcase from '../assets/briefcase.png'
import chat from '../assets/chat.png'
import bell from '../assets/bell-ring.png'
import user from '../assets/user.png'
import grid from '../assets/grid.png'
import gold from '../assets/square.png'



export default function HeaderBar() {
  return (
    <div className='bg-white w-full h-14 shadow-sm px-[15%] flex flex-row items-center shrink-0'>
      <div className='basis-1/12 shrink-0'>
        <img src={icon} alt="li" className='h-8 w-8 shrink-0'/>
      </div>

      <div className='basis-4/12 bg-gray-100 rounded-sm mr-12 flex items-center px-2 py-1'>
        <img src={searchIcon} alt='mgls' className='h-4 pr-2 shrink-0'/>

        <input 
          type='text'


          className='w-full shrink-0'
          placeholder='Search'

        />
      </div>
      <div className='basis-7/12 flex justify-evenly justify-items-center items-center'>
        <div className='justify-items-center'>
          <img src={home} alt='Home' className='h-6 w-6'/>
          <p className="text-xs">Home</p>
        </div>
        <div className='justify-items-center'>
          <img src={group} alt='My Network' className='h-6 w-6'/>
          <p className="text-xs">My Network</p>
        </div>
        <div>
          <img src={briefcase} alt='Jobs' className='h-6 w-6'/>
          <p className="text-xs">Jobs</p>
        </div>
        <div>
          <img src={chat} alt='Messaging' className='h-6 w-6'/>
          <p className="text-xs">Messaging</p>
        </div>
        <div>
          <img src={bell} alt='Notifications' className='h-6 w-6'/>
          <p className="text-xs">Notifications</p>
        </div>
        <div>
          <img src={user} alt='me' className='h-6 w-6'/>
          <p className="text-xs">Me v</p>
        </div>
        <div>
          <img src={grid} alt='For Business' className='h-6 w-6'/>
          <p className="text-xs">For Business</p>
        </div>
        <div>
          <img src={gold} alt='Try Premium' className='h-6 w-6'/>
          <p className="text-xs">Try Premium for $0</p>
        </div>
      </div>
    </div>
  )
}
