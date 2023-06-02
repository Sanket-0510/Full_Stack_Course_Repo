import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(4000, () => {
  console.log("listening at 4000");
});


app.post("/getWhether", (req, res) => {
    var cityName = req.body.city;
    
});
