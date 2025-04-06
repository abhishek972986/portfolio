import React from 'react'

import MovingBar from './MovingBar'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <Link to='/projects'>
    <div className='w-full h-full min-h-screen bg-[#f3f3f5] border rounded-2xl p-6 mt-6'>
      <div className='headbold text-center text-6xl font-bold bottombar'>Projects</div>

      <div className='h-[110%]'>
      <MovingBar/>
      </div>
    </div>
    </Link>
  )
}

export default Projects
