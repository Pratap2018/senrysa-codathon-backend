import { Router } from "express";

import { authSchemaBody } from "../middleware/authSchema";
import { validateRequestSchema } from "../middleware/validateRequestSchema";

import {authController} from "../controller/authController"
export=()=>{
    const router=Router();
    router.post("/",authSchemaBody,validateRequestSchema,authController)

    return router;

}