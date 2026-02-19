import express from "express";
import { title } from "node:process";

const app = express();
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

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
