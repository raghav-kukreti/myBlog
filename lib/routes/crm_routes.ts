import {Request, Response} from "express";
import {ContactController} from "../controllers/crm_controller";
export class Routes {   
    public contactController : ContactController = new ContactController();
    public routes(app): void {          
        app.route('/').get((req: Request, res: Response) => res.json({name : "hello, check check 123"}));
        
        app.route('/contact').get((req: Request, res: Response) => this.contactController.get_contacts);
        app.route('/contact').post((req: Request, res: Response) => this.contactController.add_contact);

        app.route('/contact/:contactId')
        .get(this.contactController.get_contact_id)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)

    }
}