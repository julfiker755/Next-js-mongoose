import usermodel from "@/lib/Model/UserModel";
import Mongoosedatabase from "@/lib/Mongoose";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


// findone
export const GET=async(req,{params})=>{
    try{
        Mongoosedatabase()
        const id = params.did;
        const result = await usermodel.findOne({ _id:id })
        return NextResponse.json(result)
    }catch(err){
        console.log(err.toString())
    }
}

// delete
export const DELETE=async(req,{params})=>{
    try{
        Mongoosedatabase()
        const id = params.did;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: 'fail', message: 'Invalid ID format Id not match' });
        }
        const result = await usermodel.deleteOne({ _id:id })
        return NextResponse.json(result)
    }catch(err){
        console.log(err.toString())
    }
}

//PUT
export const PUT=async(req,{params})=>{
    try{
        Mongoosedatabase()
        const data=await req.json()
        const id=params.did
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: 'fail', message: 'Invalid ID format Id not match' });
        }
        const filter = { _id:id}
        const options = { upsert: true }
        const updateDoc = {
            $set: {
              id:data.id,
              name:data.name,
              email:data.email,
              passowrd:data.passowrd
            },
          };
        const result=await usermodel.updateOne(filter,updateDoc,options)

        return NextResponse.json(result)
    }catch(err){
        console.log(err.toString())
    }
}