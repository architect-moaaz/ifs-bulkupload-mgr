import { Request, Response, NextFunction, response, } from "express";
import * as configuration from "../../env/DEV";
import axios from "axios";

const readXlsxFile = require('read-excel-file/node');


export class userBulkUploadController {
  
  fileUpload =  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("API triggered 1",req.file);
      
      return res.json({"Status":"Completed"});
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  };
}