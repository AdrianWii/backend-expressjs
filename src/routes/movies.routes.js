import { Router } from "express";
import { createMovie, getMovies } from "../controllers/movies.controllers.js";

const movieRoute = Router();

movieRoute.get("/", getMovies)
movieRoute.post("/", createMovie);

export default movieRoute;