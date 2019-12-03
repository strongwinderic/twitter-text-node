'use strict';

module.exports = function(app) {
  var twitterText = require('../controllers/twitterTextController');

  app.route('/calculateLength/')
    .post(twitterText.calculate_length);
};