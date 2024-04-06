import { motion } from 'framer-motion'
import React from 'react'

function MovingText() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl bg-[#004D43]'>
<div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[17vw] text-white leading-none  font-bold'><span className='text-yellow-300'>W</span>ECOME TO MY <span className='text-yellow-300'>W</span>EBSITE</motion.h1>
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[17vw] text-white leading-none  font-bold'><span className='text-yellow-300'>&nbsp;W</span>ECOME TO MY <span className='text-yellow-300'>W</span>EBSITE</motion.h1>
</div>

    </div>
  )
}

export default MovingText