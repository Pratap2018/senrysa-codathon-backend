import mongoose from "mongoose";
const schema=new mongoose.Schema({
    title: String,
    description: String,
    depertment: String,
    skillset:String,
    musthave:String,
    recruter:String,
    status:String,
    expire:String
})
export default mongoose.model("jobs",schema)