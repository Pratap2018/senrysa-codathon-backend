import mongoose from "mongoose";
const schema=new mongoose.Schema({
    email:{type:String,unique:true},
    skill:String,
    musthaveSkill:String,
    resume:{
        details:{
            course:String,
            dept:String,
            certification:String
        }
    }
})
export default mongoose.model("CandidateProfile",schema)