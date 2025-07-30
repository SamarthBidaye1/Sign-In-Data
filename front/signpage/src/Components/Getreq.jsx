import React, { useEffect, useState } from 'react'
import { getdata } from './Getdata.api';


const Getreq = () => {
    const [alldata,setalldata]=useState([]);
    const [error,setserror]=useState("");

    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const resp=await getdata();
                setalldata(resp)
            } catch (error) {
                setserror('Something Went wong')
            }
        };
        fetchdata();
    },[])

  return (
    <>
    {error && <p className='text-red-500'>{error}</p>}

      {alldata.length > 0 ? (
        alldata.map((element, index) => (
          <div className='border p-4 bg-white rounded shadow mb-4' key={element._id || index}>
            <p><strong>Name:</strong> {element.name}</p>
            <p><strong>Email:</strong> {element.email}</p>
            <p><strong>Password:</strong> {element.pass}</p>
          </div>
        ))
      ) : (
        <p>Loading data or no data available.</p>
      )}
    </>
  );
};

export default Getreq
