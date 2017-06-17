'use strict';

var app = app || {};

(function(module) {
  var workController = {};

  workController.index = function(ctx, next) {
    app.WorkExperience.fetchAll();
    next();
  };

  module.workController = workController;
})(app);

var displayContents = function() { //eslint-disable-line no-unused-vars
  $('main > div').hide();
  $('#engineer').show();
  $('.opening').hide();
};