//= require jquery
//= require angular/angular
//= require angular-ui-router/release/angular-ui-router

//= require_self
//= require_tree ./controllers

var app = angular.module('app', [
  'ui.router',

  'app.controllers.home'
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var templatePath = function(filename) {
      return '/assets/templates/' + filename + '.html';
    }

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: templatePath('home'),
        controller: 'HomeCtrl'
      });
  }
])