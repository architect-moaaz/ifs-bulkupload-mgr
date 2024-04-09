import * as express from "express";
import * as userBulkUploadAPI from "../api/userBulkUploadAPI";

let router = express.Router();
router.use('/userManagement',userBulkUploadAPI)
export = router;
