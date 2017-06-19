'use strict';

var app = app || {};

(function(module) {
  var webDesignController = {};

  webDesignController.index = function() {
    $('main > div').hide();
    $('#web-designer').show();
    $('.opening').hide();

    app.repos.requestRepos(app.repoView.index);
  };

  module.webDesignController = webDesignController;
})(app);