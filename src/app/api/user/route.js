import usermodel from "@/lib/Model/UserModel"
import Mongoosedatabase from "@/lib/Mongoose"
import { NextResponse } from "next/server"
// user route-------------------------
// get
export const GET=async(req)=>{
    try{
        Mongoosedatabase()
        const result=await usermodel.find()
        return NextResponse.json(result)

    }catch(err){
        console.log(err.toString())
    }
}

// post
export const POST=async(req)=>{
    try{
        Mongoosedatabase()
        const data=await req.json()
        const result=await usermodel.create(data)
        return NextResponse.json(result)

    }catch(err){
        console.log(err.toString())
    }
}
