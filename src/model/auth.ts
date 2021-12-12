import mongoose from "mongoose";
const schema=new mongoose.Schema({
    type: String,
    email: {type:String,unique:true },
    password: String
})
export default mongoose.model("auth",schema)