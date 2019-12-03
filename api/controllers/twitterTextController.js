'use strict';

var twttr = require('twitter-text');

exports.calculate_length = function(req, res) {
    var text = req.body.text;
    var parsedTweet = twttr.parseTweet(text)
    res.json(parsedTweet);
};