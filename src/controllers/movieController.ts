import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Erro ao tentar criar um filme: ${error.message}`);
    return res.status(500).json({ error: "Problema interno no servidor, por favor tente mais tarde!" });
  }
  return res.status(200).send("Controller Ok");
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Filme nao existe" });
    } else {
      return res.status(200).json(movie);
    }
  } catch (error: any) {
    Logger.error(`Erro ao tentar buscar o filme: ${error.message}`);
    return res.status(500).json({ error: "Problema interno no servidor, por favor tente mais tarde!" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movie = await MovieModel.find();

    if (!movie) {
      return res.status(404).json({ error: "Filmes não encontrados" });
    } else {
      return res.status(200).json(movie);
    }
  } catch (error: any) {
    Logger.error(`Erro ao tentar buscar o filme: ${error.message}`);
    return res.status(500).json({ error: "Problema interno no servidor, por favor tente mais tarde!" });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Filme nao existe" });
    } else {
      await movie.delete();
      return res.status(200).json({msg:"Filme removido com sucesso!"});
    }
  } catch (error: any) {
    Logger.error(`Erro ao tentar buscar o filme: ${error.message}`);
    return res.status(500).json({ error: "Problema interno no servidor, por favor tente mais tarde!" });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Filme nao existe" });
    } else {
      await MovieModel.updateOne({_id:id}, data);
      return res.status(200).json({msg:"Filme atualizado com sucesso!"});
    }
  } catch (error: any) {
    Logger.error(`Erro ao tentar buscar o filme: ${error.message}`);
    return res.status(500).json({ error: "Problema interno no servidor, por favor tente mais tarde!" });
  }
}