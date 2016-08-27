var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

request('https://api.twitch.tv/kraken/channels/test_channel', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body).views) // Show the HTML for the Google homepage. 
  }
})
module.exports = router;
