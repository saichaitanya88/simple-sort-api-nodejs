import express from "express";
import { hellofn, Hello } from "./utils/hello";

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));