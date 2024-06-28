import React from 'react'
import logo from "../assets/Anshita.jpg";
import { FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { CONTACT } from '../constants';


const Navbar = () => {
  return (

   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center ">

       <h1 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Get in touch</h1>
        {
           CONTACT.map((val,i)=>
            <div key={i}>
         
        
         <p><a     className="m-8 flex items-center justify-center gap-4 text-2xl md:gap-1" 
         href={val.link} alt='#'>
         {val.lname}</a></p>
         </div>
          )
           
      }
</div>
   </nav>
  )
}

export default Navbar
