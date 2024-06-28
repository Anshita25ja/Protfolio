import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"

import {DiRedis} from "react-icons/di"

import {FaCss3, FaHtml5, FaNodeJs,FaJava} from "react-icons/fa"
import { BiLogoJava } from 'react-icons/bi'
import {animate, motion} from 'framer-motion'

const Technologies = () => {
  const iconva=(duration)=>({
    initial:{y:-10},
    animate:{
      y:[10,-10],
      transition:{
        duration:duration,
        ease:'linear',
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
  })
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{y:-100,opacity:0}}   transition={{duration:0.5}} className='my-20 text-center text-4xl'> Technologies</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5 }} className='flex flex-wrap justify-center items-center gap-4'>

        <motion.div variants={iconva(5)} initial="initial" animate="animate" v className='rounded-2xl border-4 border-neutral-800 p-4'>
                     <SiMongodb className='text-7xl text-green-400'/>

            </motion.div>
            
            <motion.div variants={iconva(3)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                     <RiReactjsLine className='text-7xl text-cyan-400'/>

            </motion.div>
            
           
            <motion.div variants={iconva(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                     <FaJava className='text-7xl text-cyan-400'/>

            </motion.div>
            
            <motion.div variants={iconva(4.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                     <FaNodeJs className='text-7xl text-green-400'/>

            </motion.div>
            <motion.div variants={iconva(4.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                     <FaHtml5 className='text-7xl text-red -400'/>

            </motion.div>
         
            <motion.div variants={iconva(5.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                     <FaCss3 className='text-7xl text-yellow-400'/>

            </motion.div>
            <motion.div variants={iconva(5.6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                     <BiLogoJava className='text-7xl text-purple-400'/>

            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies
