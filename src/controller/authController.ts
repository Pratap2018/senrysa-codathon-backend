import { Request, Response, NextFunction } from 'express';
import auth from '../model/auth';
import { config } from "../config";
const pk:any=config.privatekey
import jwt from 'jsonwebtoken';

async function authController(req:Request,res:Response,next:NextFunction) {   
       
       
        try {
         const Auth=new auth(req.body)
         await Auth.save()
         var token=jwt.sign({type:req.body.type,email:req.body.email},pk ,{algorithm:'HS256'})
         res.status(200).json({Success:true,authToken:token})
        } catch (e) {
            res.status(500).json( {error: e })
        }
 
        
     
  

    return next()
}

async function loginCoontroller (req: Request, res: Response ,next:NextFunction)  {
    // console.log(req.body);
    try {
      var tempschema = await auth.findOne({ email: req.body.email });
      console.log(tempschema.password);
      
      if (req.body.password === tempschema.password && req.body.type === tempschema.type ) {
        var token = jwt.sign(
          { type: tempschema.type, email: tempschema.email },
          pk,
          { algorithm: "HS256" }
        );

        res.status(200).json({ Success: true, authToken: token });
      }else{
          res.status(403).json({Success:false});
      }

      //var token=jwt.sign({type:req.body.type,email:req.body.email},pk ,{algorithm:'HS256'})
    } catch (e) {
      res.status(500).json({ error: e });
    }
    return next();

  }






export {
    authController,loginCoontroller
}