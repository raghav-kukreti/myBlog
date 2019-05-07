import {Request, Response} from "express";

export class Routes {       
    public routes(app): void {          
        app.route('/').get((req: Request, res: Response) => res.json({name : "hello, check check 123"}));
        
        app.route('/contact').get((req: Request, res: Response) => res.json({contact : "get_complete.wav"}));
        app.route('/contact').post((req: Request, res: Response) => res.json({contact : "post_complete.wav"}));

        app.route('/contact/:contactID')
        .get(((req: Request, res: Response) => {
            res.json({contact : "get_complete.wav"})
        })).put(((req: Request, res: Response) => {
            res.json({contact : "put_complete.wav"})
        })).delete(((req: Request, res: Response) => {
            res.json({contact : "delete_complete.wav"})
        }));
    }
}