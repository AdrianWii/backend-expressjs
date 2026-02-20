import express from "express";

const app = express();

app.use(express.json());

const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {

    const movies = [
        {
            title: "Avatar",
            director: "James Cameron"
        },
        {
            title: "Interstellar",
            director: "XYZ"
        }
    ];

    res.json(movies);
})

app.post("/api/movies", (req, res, next) => {
  const movie = req.body;

  if( !movie.title ) {
    return next(new Error("Provide title"));
  }

  res.status(201).json({message: "Dodano film", ...movie});
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
