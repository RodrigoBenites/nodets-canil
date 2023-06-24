import { NextFunction, Request,Response } from "express";
import {pet} from "../models/pets";
import {createMenuObject} from "../helpers/createMenuObject";

export const search = (req:Request, res:Response, next:NextFunction)=>{
    let querry:string = req.query.q  as string
    let list = pet.getFromName(querry);
    if (list.length === 0) {
        next(); // Chama o próximo middleware
      } else {
        res.render('pages/page', {
          menu: createMenuObject(''),
          list
        });
      }
    };
