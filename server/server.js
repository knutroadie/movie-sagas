const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const router = express.Router();
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.get('/movies', (req, res) => {
    let queryText = 'SELECT * FROM "movies" ORDER BY "title";';
    console.log(queryText);    
    pool.query(queryText).then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error in server.js movies router.get', error);
        res.sendStatus(500);
    });
});

app.get('/genres', (req, res) => {
    let queryText = 'SELECT * FROM "genres";';
    console.log(queryText);    
    pool.query(queryText).then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error in server.js genres router.get', error);
        res.sendStatus(500);
    });
});

// app.put() to update movie data on the database

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});