import React from 'react'
import aboutimg from "../assets/Anshita2.jpg"
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'
const Aboutus = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <h2 className='my-20 text-center text-4xl'>About<span className='text-neutral-500'>Me</span></h2>
  <motion.div whileInView={{opacity:1, x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5 ,delay:0.5}} className='flex flex-wrap'>
<div className="w-full lg:w-1/2 lg:p-8">
<div className='flex items-center justify-center'>
<img className='rounded-2xl lg:w-1/3 ' src={aboutimg} alt="about"></img>
</div>



</div>
<div className='w-full lg:w-1/2'>
<div className='flex justify-center lg:justify-start'>
    <motion.p  whileInView={{opacity:1, x:0}} initial={{x:100,opacity:0}}   transition={{duration:0.5, delay:0.5}}className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</motion.p>
    </div>
    </div>

  </motion.div>
</div>
  )
}

export default Aboutus
