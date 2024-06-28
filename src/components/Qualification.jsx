import React from 'react'
import Table from 'react-bootstrap/Table';
import {animate, motion} from 'framer-motion'
const Qualification = () => {
  return (
    <div className='border-b border-neutral-900 '>
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{y:-100,opacity:0}}   transition={{duration:0.5}} className='my-20 text-center text-4xl'>Qualification</motion.h1>
      <div>
      <Table className='w-full lg:w-1/4' w-full striped bordered variant="dark">
      <thead >
        <tr>
          <th>College & School Name</th>
          <th>Degree & Result</th>
          <th>Passing year</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Institute of Engineering and Technology, DAVV Indore</td>
          <td>Electronics and Telecommunications</td>
          <td>pursuing</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Kendriya Vidyalaya, Narmada Nagar</td>
          <td>12th</td>
          <td>2021</td>
          <td>89.4%</td>
        </tr>
        <tr>
        <td>Kendriya Vidyalaya, Narmada Nagar</td>
          <td>10th</td>
          <td>2019</td>
          <td>88.8%</td>
        </tr>
      </tbody>
    </Table>

      </div>
    </div>
  )
}

export default Qualification
