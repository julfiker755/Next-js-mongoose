"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Updatetable= ({id}) => {
    const router=useRouter()
    const [updatedata,setupdatedata]=useState([])
    useEffect(()=>{
      (async()=>{
        const {data}=await axios.get(`/api/user/${id}`)
        setupdatedata(data)
      })()
    },[id])


    // handlesubmit
    const hanldesubmit=(e)=>{
       e.preventDefault()
       const name=e.target.name.value
       const email=e.target.email.value
       const passowrd=e.target.passowrd.value
       const user={id:Math.floor(Math.random()*666666),name,email,passowrd}
       axios.put(`/api/user/${id}`,user)
       .then(result=>{
        if(result.data){
         toast.success('Update Successfull')
         router.push('/')
        
        }
       })

    }

    
    return (
        <div className='flex justify-center items-center h-[calc(100vh-30px)]'>
           
            <div className="w-full max-w-xs">
        <form onSubmit={hanldesubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center border-b-2">Update from</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={updatedata.name}
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
             Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={updatedata.email}
              name="email"
              disabled
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={updatedata.passowrd}
              name="passowrd"
              
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update to user
            </button>
          </div>
        </form>
      </div>
    
        </div>
    );
};

export default Updatetable;