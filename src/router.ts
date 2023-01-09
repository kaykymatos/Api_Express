import { Router, Request, Response } from "express";

const rout = Router();

export default rout.get('/teste',async (req:Request, res:Response) => {
 res.status(200).send("Api Working")   
})