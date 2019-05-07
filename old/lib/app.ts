import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crm_routes";

class App {
    public app;
    public routePrv : Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/CRMdb';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        // this.mongoSetup();
    }
    // Ok found the big issue here
    // So like middleware must have some sorta order right so
    // I guess I needed to put config in the last because body parser
    // needs to be the last middleware loaded.
    // makes a bit of sense because it handles GET/POST
    // so you need every auth/everyting done ok
    private mongoSetup() : void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    // lmao cancel that missed brackets in json 
    private config():void  {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;

