'use strict';

function WorkExperience (rawWorkData) {
  this.company = rawWorkData.company;
  this.jobTitle = rawWorkData.jobTitle;
  this.years = rawWorkData.years;
  this.description = rawWorkData.description;
}

WorkExperience.all = [];

WorkExperience.prototype.toHtml = function () {
  var $newWorkExperience = $('li.template').clone().removeClass('template');
  $newWorkExperience.find('.company').text(this.company);
  $newWorkExperience.find('.jobTitle').text(this.jobTitle);
  $newWorkExperience.find('.years').text(this.years);
  $newWorkExperience.find('.description').text(this.description);
  console.log($newWorkExperience);
  $('#resume').append($newWorkExperience);
};

rawWorkData.forEach(function (obj){
  var workObj = new WorkExperience(obj);
  WorkExperience.all.push(workObj);
});

WorkExperience.all.forEach(function (obj){
  // console.log(obj);
  obj.toHtml();
});


// console.log(WorkExperience.all);