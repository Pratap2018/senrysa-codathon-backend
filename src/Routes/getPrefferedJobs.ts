import { Router } from "express";
import { getPreffredJob } from "../controller/getPreffredJob";


import { validateRequestSchema } from "../middleware/validateRequestSchema";
export=()=>{
    const router=Router();
    router.get("/",getPreffredJob)

    return router;

}