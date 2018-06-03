import express from "express";
import bodyParser from "body-parser";
import { bubbleSort } from "./utils/bubbleSort";

const app = express();

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => res.send('Hello World!'));
app.post('/bubbleSort', (req, res) => {
    console.log(req.body)
    try {
        res.send(bubbleSort(req.body));
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));