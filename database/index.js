var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movies'
});

connection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected to database!');
  //now you can start querying the database using SQL statements
});

module.exports = {
  
  getAllMovies: (callback) => {
    var queryStr = 'select * from movies';
    connection.query(queryStr, (err, results) => {
  	  callback(err, results);
    }) 
  },

  postNewMovies: (params, callback) => {
    var queryStr = 'insert into movies (title) values (?)';
    connection.query(queryStr, params, (err, results) => {
  	  console.log(results);
  	  callback(err, results);
    }) 
  }


};

    // post: function (params, callback) {
    //   // create a message for a user id based on the given username
    //   var queryStr = 'insert into messages(text, userid, roomname) \
    //                   values (?, (select id from users where username = ? limit 1), ?)';
    //   db.query(queryStr, params, function(err, results) {
    //     callback(err, results);
    //   });
    // }