'use strict';

function WorkExperience (rawWorkData) {
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



var workView = {};

workView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    event.preventDefault();
    $('.opening').hide();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
};

function populateWork() {
  rawWorkData.forEach(function(obj){
    WorkExperience.all.push(new WorkExperience(obj));
  });
  WorkExperience.all.forEach(function(obj) {
    $('#engineer').append(obj.toHtml());
  });
}


function initIndexPage () {
  populateWork();
  $('.tab-content').hide();
};


WorkExperience.fetchAll = function () {
  if (localStorage.rawWorkData) {
    WorkExperience.loadAll(JSON.parse(localStorage.rawWorkData));
    initIndexPage();
  }else {
    $.getJSON('/data/rawData.json')
    .then(function(rawWorkData){
      WorkExperience.loadAll(rawWorkData);
      localStorage.rawWorkData = JSON.stringify(rawWorkData);
      initIndexPage();
    }, function(err) {
      console.error(err);
    });
  }
};

workView.handleMainNav();