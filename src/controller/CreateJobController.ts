import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import jobs from "../model/jobs";
const pk: any = config.privatekey;

async function CreateJobController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    var authToken = req.headers["authorization"];

    if (authToken?.split(" ")[0] === "Bearer") {
      var decrypt: any = jwt.verify(authToken?.split(" ")[1], pk);

      if (decrypt.type === "Admin") {
        var newJob = new jobs(req.body);
        await newJob.save();
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

export { CreateJobController };
