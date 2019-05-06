// require the request package from npm
var request = require('request');

// Create the url according to showId and options
var getUrl = function(showId, option) {
  // give us the right string to add to the url
  // if we have an option
  var options = {
    cast: '/cast',
    seasons: '/seasons',
    episodes: '/episodes',
  };

  var url = 'http://api.tvmaze.com/shows/' + showId;

  if (option) {
    url += options[option];
  }

  return url;
};

// Create a reusable request
var sendRequest = function(url, callback) {
  request(url, function(error, response, body) {
    // If everything is fine with the request
    if (!error && response && response.statusCode === 200) {
      // executing the callback function and send the result to it
      callback(JSON.parse(body));
    } else {
      console.log('Error: ', error);
    }
  });
};

// get the showinfo
var getShowInfo = function(showId, callback) {
  sendRequest(getUrl(showId), callback);
};

// get the info on the cast
var getCastInfo = function(showid, callback) {
  sendRequest(getUrl(showid, 'cast'), callback);
};

// exporting the functions that we want to be available
module.exports = {
  getCastInfo: getCastInfo,
  getShowInfo: getShowInfo,
};
