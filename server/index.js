const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database')
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

app.get('/movies', (req, res) => {
  db.getAllMovies((err, results) => {
    if (err) {console.log(err);}
    res.json(results);
  });
  // res.send(movies);
});

app.post('/movies', (req, res) => {
  var params = [req.body.title];
  db.postNewMovies(params, (err, results) => {
  	if (err) {console.log(err);}
  	res.sendStatus(201);
  });

  // console.log(req.body);
  // movies.push(req.body);
  // res.send(movies);
});


  //   post: function (req, res) {
  //     var params = [req.body.message, req.body.username, req.body.roomname];
  //     models.messages.post(params, function(err, results) {
  //       if (err) { console.log(err); }
  //       res.sendStatus(201);
  //     });
  //   }
  // },

  // messages: {
  //   get: function (req, res) {
  //     models.messages.get(function(err, results) {
  //       if (err) { console.log(err); }
  //       res.json(results);
  //     });
  //   },