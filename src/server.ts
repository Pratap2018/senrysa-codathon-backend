import express, { Router } from "express";
import mongoose  from "mongoose";
import bodyParser from "body-parser";
import {config} from "./config";
import Routes from "./Routes";
import cors from "cors";

const PORT=config.port
const app= express()
var corsOptions = {
    origin: 'http://localhost:4000'
    
  }
mongoose.connect(config.db_url as string).then(( e)=>{
console.log("DB Connected");

})
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use('/api/v1/auth',Routes.auth())
app.use('/api/v1/auth/login',Routes.login())
app.use('/api/v1/createJob',Routes.createjob())
app.use('/api/v1/candidateProfile',Routes.CandidateProfile())
app.use('/api/v1/getjobs',Routes.getPrefferedJobs())

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})