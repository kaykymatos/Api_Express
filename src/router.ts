import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieController";
import { validate } from "./middleware/handlerMiddleware";
import { movieCreateValidation } from "./middleware/movieValidation";

const rout = Router();

export default rout
  .get("/teste", async (req: Request, res: Response) => {
    res.status(200).send("Api Working");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id",findMovieById)
  .get("/movie", getAllMovies)
  .delete("/movie/:id",removeMovie)
  .patch("/movie/:id", movieCreateValidation(), validate,updateMovie);
