'use strict';
var app = app || {};

(function(module){
  const repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    console.log('in request repos');
    debugger;
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: { 'Authorization': `token ${githubToken}` }
    })
      .then(data => repos.all = data, err => console.error(err)).then(callback);
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);