import { Router } from "express";

import { validateRequestSchema } from "../middleware/validateRequestSchema";

import { CandidateProfileSchema } from "../middleware/CandidateProfileShema";
import { CandidateProfileController } from "../controller/CandidateProfileController";
export=()=>{
    const router=Router();
    router.post("/",CandidateProfileSchema,validateRequestSchema,CandidateProfileController)

    return router;

}