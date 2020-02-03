const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- ROUTES ---------- **/
app.get('/movies', (req, res) => {
    let queryText = 'SELECT * FROM "movies" ORDER BY "title";';
    pool.query(queryText).then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error in server.js movies router.get', error);
        res.sendStatus(500);
    });
});

// app.get for junction table genres
app.get('/genres', (req, res) => {
    console.log(req.query.id);
    let thisMovie = (req.query.id)
    let queryText = `SELECT "genres".name from "movies"
    JOIN "movie_genre" on "movies".id = "movie_genre".movie_id
    JOIN "genres" on "movie_genre".genre_id = "genres".id
    WHERE "movies".id = $1;`
    
    // `SELECT "genres".name, FROM "genres"
    // JOIN "movie_genre" ON "genres"."id"="movie_genre"."genre_id"
    // JOIN "movies" ON "movies"."id" = "movie_genre"."movie_id"
    // WHERE "movie".id = $1;`;
    pool.query(queryText, [thisMovie]).then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error in server.js movie_genre router.get', error);
        res.sendStatus(500);
    });
});

// app.put() to update movie data on the database
app.put('/movies/:id', (req, res) => {
    let movieId = req.params.id;
    let title = req.params.title;
    let description = req.params.description;
    const sqlText = `UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "movies".id = $3;`;
    const values = [movieId, title, description];
    pool.query(sqlText, values)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error updating movie, server.js PUT`, error);
            res.sendStatus(500);
        })
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});