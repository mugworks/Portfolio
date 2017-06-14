'use strict';

var app = app || {};

(function (module) {

  function WorkExperience(rawWorkData) {
    this.company = rawWorkData.company;
    this.jobTitle = rawWorkData.jobTitle;
    this.years = rawWorkData.years;
    this.description = rawWorkData.description;
  }

  WorkExperience.all = [];

  WorkExperience.prototype.toHtml = function () {
    var template = Handlebars.compile($('#work-template').text());
    return template(this);
  };

  WorkExperience.fetchAll = function () {
    if (localStorage.rawWorkData) {
      populateWork(JSON.parse(localStorage.rawWorkData));
      initIndexPage();
    } else {
      $.getJSON('./data/rawData.json')
        .then(function (rawWorkData) {
          populateWork(rawWorkData);
          localStorage.rawWorkData = JSON.stringify(rawWorkData);
          initIndexPage();
        }, function (err) {
          console.error(err);
        });
    }
  };
  module.WorkExperience = WorkExperience;
}(app));


var workView = {};

workView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function () {
    event.preventDefault();
    $('.opening').hide();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
};

function populateWork(rawWorkData) {
  console.log('in populate work');
  rawWorkData.forEach(function (obj) {
    app.WorkExperience.all.push(new app.WorkExperience(obj));
  });
  app.WorkExperience.all.forEach(function (obj) {
    $('#engineer').append(obj.toHtml());
  });
}


function initIndexPage() {
  $('.tab-content').hide();
};



workView.handleMainNav();