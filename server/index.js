const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');
const request = require('request');
const movieApi = require('../lib/movieAPI.js');




app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/movies', (req, res) => {
  db.getAllMovies((err, results) => {
    if (err) {console.log(err);}
    res.json(results);
  });
});


app.post('/movies', (req, res) => {
  var params = [req.body.title];
  db.postNewMovies(params, (err, results) => {
  	if (err) {console.log(err);}
  	res.sendStatus(201);
  });
});

app.get('/load', (req, res) => {
  movieApi.searchApi((results) => {
  	// if (err) {console.log(err);}
  	
  	results.forEach((movie) => {
  	  var params = [movie.title]
  	  db.postNewMovies(params, (err, results) => {
  	  	if(err) {console.log(err);}
  	  });
  	});
  });
});




