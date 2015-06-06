//= require jquery
//= require angular
//= require angular-resource
//= require angular-ui-router
//= require bootstrap-sass-official/assets/javascripts/bootstrap-sprockets

//= require_self
//= require_tree ./controllers
//= require services

var app = angular.module('app', [
  'ui.router',

  'app.controllers.home',
  'app.services'
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

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