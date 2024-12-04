import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class validationUserMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){

        const { authorization } = req.headers;
        if(!authorization){
            return res.status(403).send({error: "No authentication Toke Provided"})

        }
        return res.status(403).send({error: "No authentication Toke Provided"})
    }
}