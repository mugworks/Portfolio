'use strict';

app = app || {};

(function(module) {
  const workController = {};

  workController.index = 
  $('.main-nav').on('click', '.tab', function () {
    event.preventDefault();
    $('.opening').hide();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  module.workController = workController;
})(app);