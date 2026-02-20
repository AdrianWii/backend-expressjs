import { movies } from "../data/movie.data.js";

export function getMovies(req, res) {
  res.json(movies);
}

export function createMovie(req, res, next) {
  const movie = req.body;

  if (!movie.title) {
    return next(new Error("Provide title"));
  }

  movies.push({
    id: movies.length +1,
    title: movie.title,
    director: movie.director,
    likes: 0
  })

  res.status(201).json({ message: "Dodano film", ...movie });
}
