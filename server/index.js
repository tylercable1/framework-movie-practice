const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

app.get('/movies', (req, res) => {
  if (err) {
  	console.log(err);
  } else {
  	res.send(movies)
  }
})

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




