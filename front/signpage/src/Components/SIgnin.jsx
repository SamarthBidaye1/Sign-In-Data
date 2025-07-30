import React, { useState } from 'react'
import { signUser } from './Signin.api';
import Getreq from './Getreq';
import { Link } from 'react-router-dom';

const SIgnin = () => {
    const [nameVal,setname]=useState('');
     const [emailVal,setemail]=useState('');
      const [passVal,setpass]=useState('');

      const datapassing=async(e)=>{
        e.preventDefault();
        
        const userdata={
          name:nameVal,
          email:emailVal,
          pass:passVal
        }

        try {
          const datalinktoapi=await signUser(userdata);
          console.log(datalinktoapi);
          e.target.reset();
          setname('')
          setemail('')
          setpass('')
        } catch (error) {
         
            console.log('API Error:', error.message || error);
          
        }
      }

    //   console.table([nameVal,emailVal,passVal]);
  return (
    <>
      <div className='flex justify-center items-center  w-[50%] m-auto mt-[10%] rounded-xl bg-amber-200'>
        <form onSubmit={datapassing} className='flex flex-col gap-5 p-5'>
        <label htmlFor="name" className=' font-medium'>Name</label>
        <input className='border w-100 bg-white' type='text' name='name' value={nameVal} onChange={(e)=>setname(e.target.value)}/>
        <label htmlFor="email" className=' font-medium'>Email</label>
        <input className='border w-100 bg-white' value={emailVal}  onChange={(e)=>setemail(e.target.value)} name='email'/>
        <label htmlFor="pass" className=' font-medium'>Password</label>
        <input className='border w-100 bg-white' value={passVal}  onChange={(e)=>setpass(e.target.value)} name='pass'/>
        <button className='bg-blue-300 p-3' type='submit'>SignIn</button>
        </form>
        <Link to={'/getdata'}><button className='bg-blue-300 p-3 rounded-2xl border-white-2' type='button'>View Data</button></Link>
      </div>
    </>
  )
}

export default SIgnin
