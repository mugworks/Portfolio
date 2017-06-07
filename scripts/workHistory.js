'use strict';

function WorkExperience (rawWorkData) {
  this.company = rawWorkData.company;
  this.jobTitle = rawWorkData.jobTitle;
  this.years = rawWorkData.years;
  this.description = rawWorkData.description;
}

WorkExperience.all = [];

// WorkExperience.prototype.toHtml = function () {
//   var $newWorkExperience = $('div.resume').clone().removeClass('resume');
// }

$('li(#company)').replaceWith(this.company);