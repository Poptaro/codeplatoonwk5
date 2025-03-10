

import Linkedin from './components/Linkedin'
import HeaderBar from './components/HeaderBar'
import ProfileCard from './components/ProfileCard'

import './App.css'

function App() {

  return (
    <Linkedin>
      <HeaderBar />
      <div className='mx-24 bg-green-200 mt-6 h-full rounded-xl'>
        <ProfileCard />
      </div>




    </Linkedin>
  )
}

export default App
