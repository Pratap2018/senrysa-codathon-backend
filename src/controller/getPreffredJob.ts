import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import jobs from "../model/jobs";
import candidateProfile from "../model/candidateProfile";
const pk: any = config.privatekey;

async function getPreffredJob(req: Request, res: Response, next: NextFunction) {
  try {
    var authToken = req.headers["authorization"];
    if (authToken === undefined) {
      throw new Error("Jwt not passed");
    }
    if (authToken?.split(" ")[0] === "Bearer") {
      var decrypt: any = jwt.verify(authToken?.split(" ")[1], pk);
      if (decrypt.type === "User") {
        console.log(decrypt);

        var profile = await candidateProfile.findOne({ email: decrypt.email });
        var array_skills = profile.skill.trim().split(",");
        var jobs_list = await jobs.find();
        console.log(array_skills);
        var array_to_return = new Map();
        var arr_return=[]
        jobs_list.forEach((item) => {
            var status:boolean=false
            
          array_skills.some((w: any) => {
            console.log(w);
            console.log(item.skillset);

            if(item.skillset.toLowerCase().includes(w)){
                array_to_return.set(item._id,item);
                status=true
                return 
            }
          });
          if(status){
            return
        }
        });
      } else {
        throw new Error("Jwt Malformed");
      }
      array_to_return.forEach(item=>arr_return.push(item))

    }
    
    // await newJob.save()
    res.status(200).json({ Success: true, Created: true ,result:arr_return});
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: e });
  }

  return next();
}

export { getPreffredJob };
