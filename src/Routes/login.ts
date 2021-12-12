import { Router } from "express";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { loginCoontroller } from "../controller/authController";
import { authSchemaBody } from "../middleware/authSchema";
import { validateRequestSchema } from "../middleware/validateRequestSchema";
const pk: any = config.privatekey;
export = () => {
  const router = Router();
  router.post(
    "/",
    authSchemaBody,
    validateRequestSchema,loginCoontroller)
    

  return router;
};
