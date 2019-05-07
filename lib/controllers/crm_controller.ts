import {Request, Response} from "express";
import {contactSchema} from "../models/crmModel";
import * as mongoose from "mongoose";

const Contact = mongoose.Model('contact', contactSchema);

export class ContactController {
    public add_contact(req: Request, res: Response) : void {
        let new_contact = new Contact(req.body);
        new_contact.save((err, contact) => {
            if(err) {
                res.send(err);
            }
            else {
                res.json(contact);
            }
        });
    }

    public get_contacts(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        }); 
    }

    public get_contact_id (req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    public updateContact (req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    public deleteContact (req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
}