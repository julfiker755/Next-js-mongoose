"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Adduser= () => {
    const router=useRouter()
    const hanldesubmit=(e)=>{
       e.preventDefault()
       const name=e.target.name.value
       const email=e.target.email.value
       const passowrd=e.target.passowrd.value
       const user={id:Math.floor(Math.random()*666666),name,email,passowrd}
       axios.post('/api/user',user)
       .then(result=>{
        if(result.data){
         toast.success('user add Successfull')
         router.push('/')
        }
       })

    }
    return (
        <div className='flex justify-center items-center h-[calc(100vh-24px)]'>
            <div className="w-full max-w-xs">
        <form onSubmit={hanldesubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
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
              name="email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="passowrd"
              
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add to user
            </button>
          </div>
        </form>
      </div>
    
        </div>
    );
};

export default Adduser;