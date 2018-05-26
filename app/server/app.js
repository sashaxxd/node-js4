import express from 'express';
import BodyParser from 'body-parser';
import * as db from './utils/DataBase';
import {serverPort} from '../etc/config.json';




db.setUpConnection();

const app = express();
app.use(BodyParser.json());

/**
 * маршрут
 */

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});



app.get('/notes', (req, res) => {
    // res.send('Hello World!');
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
  db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});



const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});
