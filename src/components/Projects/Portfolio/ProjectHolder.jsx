import React from 'react'
import Bg from './bg-and-fg/Bg'
import Fg from './bg-and-fg/Fg'

function ProjectHolder() {
  return (
    <div id='projects' className='w-full relative h-screen bg-zinc-800'>
        <Bg/> 
        <Fg/>
    </div>
  )
}

export default ProjectHolder