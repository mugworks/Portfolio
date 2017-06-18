'use strict';

var app = app || {};

(function(module) {
  var volunteerController = {};

  volunteerController.index = function() {
    $('main > div').hide();
    $('#volunteer').show();
    $('.opening').hide();
  };

  module.volunteerController = volunteerController;
})(app);