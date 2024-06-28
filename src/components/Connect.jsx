import React, { useState } from 'react'
import { CONTACT } from '../constants'
import Button from 'react-bootstrap/Button';

const Connect = () => {
 
  
  let [formd,setFormd]=useState({
    ename:'',
    eemail:'',
    ephone:'',
    emessage:'',
    eindex:""
  })
  let getvalue=(e)=>{
  let oldname={...formd}
  let inpu=e.target.name
  let invalue=e.target.value
  
  oldname[inpu]=invalue
  setFormd(oldname)
  
  
  }
  let [update,setUpdate]=useState([])
  
  //insert data
   let handle=(e)=>{
    let curr={
      ename:formd.ename,eemail:formd.eemail,epassword:formd.ephone,emessage:formd.emessage
    }
  let check=update.filter((v,i)=>v.eemail==curr.eemail || v.ename==curr.ename)
  
  if(check.length==1){
    alert("already exits")
  }
  else{
    let oold=[...update,curr]
    
    
    setUpdate(oold)
    console.log(update.length)
    console.log(update)
  
  setFormd(  {ename:'',
    eemail:'',
    ephone:'',
    emessage:'',
    eindex:""
  })}
  e.preventDefault();
  }
  let del=(ind)=>{
    alert(ind)
    let dell=update.filter((v,i)=>i!==ind)
    setUpdate(dell)
     }
    return(
      <div className="App">
        
        <h2 className=' text-center text-4xl'>Contact<span className='text-neutral-500'>Me</span></h2>
        <div className='flex'>
        
<div>
        <div className='ml-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Let's Work Together</div>
        <h6 className='ml-5 mt-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-1xl tracking-tight text-transparent'>Email:ajais740@gmail.com</h6>
        <h6 className='ml-5  mt-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-1xl tracking-tight text-transparent'>M.7224992099</h6>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col lg-6 flex justify-center align-center'>
              <form onSubmit={handle} >
                <div className='text-start my-3'>
                  <label>UserName</label>
                  <input onChange={getvalue} value={formd.ename} name="ename" type="text" className='bg-transparent text-white form-control'></input>
                </div>
                <div className='text-start my-3'>
                  <label>Phone</label>
                  <input onChange={getvalue} value={formd.ephone} name='ephone' type="number" className=' bg-transparent text-white form-control'></input>
                </div>
                <div className='text-start my-3'>
                  <label>email</label>
                  <input onChange={getvalue} value={formd.eemail} name='eemail' type="email" className='bg-transparent text-white form-control'></input>
                </div>
                <div className='text-start my-3'>
                  <label>Message</label>
                  <input  onChange={getvalue} value={formd.emessage} name='emessage'type="text" className='bg-transparent text-white form-control '></input>
                </div>
                   <div className='text-start my-3'>
  <button >Save
  </button>
              
             </div>
              </form>
            </div>
           
      </div>
      </div>
      </div>
    </div>
  )
}

export default Connect
