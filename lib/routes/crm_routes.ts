import {Request, Response} from "express";

export class Routes {       
    public routes(app): void {          
        app.route('/').get((req, res) => res.json({name : "hello, check check 123"}));
    }
}