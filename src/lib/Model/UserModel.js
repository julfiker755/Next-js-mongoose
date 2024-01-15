import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    id:{type:String,require:true},
    name:{type:String,require:true},
    email:{type:String,unique: true, require: true},
    passowrd:{type:String,require:true},
  },{timestamps:true}
  );

  const usermodel =mongoose.models.users || mongoose.model('users',Userschema);

  export default usermodel;
