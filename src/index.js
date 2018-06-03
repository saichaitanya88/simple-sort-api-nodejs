import express from "express";
import bodyParser from "body-parser";
import { mergeSortHandler, bubbleSortHandler } from "./apiHandlers";

const app = express();

// parse application/json
app.use(bodyParser.json())

app.post('/mergeSort', mergeSortHandler);
app.post('/bubbleSort', bubbleSortHandler);

app.listen(3000, () => console.log('Example app listening on port 3000!'));