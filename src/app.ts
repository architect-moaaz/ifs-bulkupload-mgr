import * as express from "express";
import * as bodyParser from "body-parser";
import * as routes from "./routes/configuration";
import * as mongoose from "mongoose";
import * as cors from "cors";
import * as fileUpload from "express-fileupload"

class App {
  public app: express.Application = express();

  constructor() {
    this.config();
  }
  private config(): void {
    this.app.use(bodyParser.json({limit: '50mb'}));
    this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use("/BULK", routes);
    this.app.use(fileUpload({
      limits: { fileSize: 50 * 1024 * 1024 },
      useTempFiles : true,
      tempFileDir : '/tmp/'
  }));
    
  }
}
export default new App().app;
