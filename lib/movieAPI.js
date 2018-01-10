const fetch = require('isomorphic-fetch');
module.exports = {
  searchApi: (callback) => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=tmdbkey')
      .then((data) => data.json())
      .then((data) => callback(data.results))  
  }
}


    // request('https://api.themoviedb.org/3/movie/now_playing?api_key=4541b4fb18abfc78fc58f114904f452d', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   // console.log('body:', body); // Print the HTML for the Google homepage.
