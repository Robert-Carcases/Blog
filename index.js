import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/articles", (req, res) => {
  res.render("articles.ejs");
});

app.get("/submit", (req, res) => {
  res.render("submit.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.post("/submit", (req, res) => {
  console.log('Request body:', req.body);
  res.render("index.ejs", {
    title: req.body['title'],
    content: req.body['content']
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
