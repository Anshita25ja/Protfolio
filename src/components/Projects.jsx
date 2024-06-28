import React from 'react'
import { PROJECTS } from '../constants'
import {animate, motion} from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutal-900 pb-4'>
       <motion.h1 whileInView={{opacity:1, y:0}} initial={{y:-100,opacity:0}}   transition={{duration:0.5}} className='my-20 text-center text-4xl'>Projects</motion.h1>
      <div>
        {
        PROJECTS.map((project,index) =>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center' >
            <div className='w-full lg:w-1/4'>
               <motion.img whileInView={{opacity:1, x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5 }}  src={project.image} width={250} heigth={250} alt={project.title} className='mb-6 rounded'></motion.img>
        </div>
        <motion.div whileInView={{opacity:1, x:0}} initial={{x:100,opacity:0}}   transition={{duration:0.5 }}  className='w-full max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold'>{project.title}</h6>
        <p className='mb-4 text-neutral-400'>{project.description}</p>
        {project.technologies.map((tech,index)=>
        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
        )}
        </motion.div >
        </div>
      ))

      }
      </div>
    </div>
  )
}

export default Projects
