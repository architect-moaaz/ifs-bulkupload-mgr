import * as express from "express";
import {  userBulkUploadController} from "../controllers/Keycloak/userBulkUploadController";
const multer = require('multer')
const path = require('path')
const fs = require('fs');
const UserBulkUploadController: userBulkUploadController = new userBulkUploadController();
let router = express.Router();

const upload = multer({ dest: 'uploads/' })


router.post("/upload", upload.single('file'),UserBulkUploadController.fileUpload);
export = router;
