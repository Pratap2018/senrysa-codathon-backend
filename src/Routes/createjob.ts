import { Router } from "express";
import { CreateJobController } from "../controller/CreateJobController";

import { CreatejobSchema } from "../middleware/CreateJobSchema";
import { validateRequestSchema } from "../middleware/validateRequestSchema";
export=()=>{
    const router=Router();
    router.post("/",CreatejobSchema,validateRequestSchema,CreateJobController)

    return router;

}