"use client"
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Trow = ({userid}) => {
    const router=useRouter()
    return  <td className="px-4 py-3 text-sm border flex gap-3">
        <h1 onClick={()=>{
            axios.delete(`/api/user/${userid}`)
            .then(result=>{
               if(result.data.deletedCount > 0){
                toast.success('Delete Successfull')
                router.push('/')
               }
            })
        }} className='bg-[#2eb68f] w-fit p-1 rounded-md cursor-pointer'><Trash2 color='blue' size={20}></Trash2></h1>
        <h1 onClick={()=>{
            router.push(`/update/${userid}`)
        }} className='bg-[#8a4720] w-fit p-1 rounded-md cursor-pointer'><Pencil color='red' size={17}></Pencil></h1>
    </td>
};

export default Trow;