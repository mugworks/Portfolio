'use strict';

var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $webDesign = $('#web-designer');
    $webDesign.find('ul').empty();
    $webDesign.show().siblings().hide();
  };

  var render = Handlebars.compile($('#project-template').text());

  repoView.index = function() {
    ui();
    $('#web-designer ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);