import React from 'react'
import { HERO_CONTENT } from '../constants'
import pic from "../assets/Anshita2.jpg"
import { motion, transform } from "framer-motion"
const Hero = () => {
  const container=(delay)=>({
   hidden:{ x:-100, opacity:0},
   visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
   }
  })
  return (
    <div className="border-neutral-900 pd-4 lg:mb-35">
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 variants={container(0)}initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Anshita Jaiswal</motion.h1>
            <motion.h1 variants={container(0.2)}initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                Web Developer
            </motion.h1>
            <motion.p variants={container(0.3)}initial="hidden" animate="visible" className='my-2 max-w-xl py-6'>{HERO_CONTENT}</motion.p>
        </div>
        
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center align-center '>
            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}}  transition={{duration:1,delay:1.2}}src={pic} className="rounded-2xl lg:w-1/2 " ></motion.img>
            </div></div>
      </div>
   
    </div>
  )
}

export default Hero
