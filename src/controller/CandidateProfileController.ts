import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import CandidateProfile from "../model/candidateProfile";
const pk: any = config.privatekey;

async function CandidateProfileController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    var authToken = req.headers["authorization"];

    if (authToken?.split(" ")[0] === "Bearer") {
      var decrypt: any = jwt.verify(authToken?.split(" ")[1], pk);

      if (decrypt.type === "User") {
        var candidateprofile = new CandidateProfile(req.body);
        await candidateprofile.save();
      } else {
        throw new Error("Jwt Malformed");
      }
    }

    // await newJob.save()
    res.status(200).json({ Success: true, Created: true });
  } catch (e) {
     
      
    res.status(500).json({ error: e });
  }

  return next();
}

export { CandidateProfileController };
