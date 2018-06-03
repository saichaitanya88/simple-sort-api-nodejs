import { bubbleSort } from "./utils/bubbleSort";
import { mergeSort } from "./utils/mergeSort";

export function bubbleSortHandler(req, res){
    if (!req.body || !req.body.unsortedNumbers){
        res.status(400).send("Request body must have property: unsortedNumbers");
        return;
    }
    try {
        let results = bubbleSort(req.body.unsortedNumbers);
        res.status(200).send(results);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
export function mergeSortHandler(req, res){
    if (!req.body || !req.body.unsortedNumbers){
        res.status(400).send("Request body must have property: unsortedNumbers");
        return;
    }
    try{
        let results = bubbleSort(req.body.unsortedNumbers);
        res.status(200).send(results);
    }
    catch(error){
        res.status(400).send(error.message);
    }
}