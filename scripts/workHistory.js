'use strict';

function WorkExperience (rawWorkData) {
  this.company = rawWorkData.company;
  this.jobTitle = rawWorkData.jobTitle;
  this.years = rawWorkData.years;
  this.description = rawWorkData.description;
}

var workExperienceArray = [];

WorkExperience.prototype.toHtml = function () {
  // var $newWorkExperience = $('li.template').clone().removeClass('template');
  // $newWorkExperience.find('.company').text(this.company);
  // $newWorkExperience.find('.jobTitle').text(this.jobTitle);
  // $newWorkExperience.find('.years').text(this.years);
  // $newWorkExperience.find('.description').text(this.description);
  // console.log($newWorkExperience);
  // $('#resume').append($newWorkExperience);
  var template = Handlebars.compile($('#work-template').text());
  console.log('at prototype');
  return template(this);
};




// rawWorkData.forEach(function (obj){
//   WorkExperience.all.push(new WorkExperience(obj));
// });

// WorkExperience.all.forEach(function (obj){
//   obj.toHtml();
// });

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
    workExperienceArray.push(new WorkExperience(obj));
  });
  workExperienceArray.forEach(function(obj) {
    $('#work-template').append(obj.toHtml());
  });
}


function initIndexPage () {
  console.log ('starting index page');
  populateWork();
  $('.tab-content').hide();
};

initIndexPage();
workView.handleMainNav();