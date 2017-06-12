'use strict';

/**
 * @ngdoc overview
 * @name webMoviehdkhApp
 * @description
 * # webMoviehdkhApp
 *
 * Main module of the application.
 */
angular
  .module('webMoviehdkhApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  .config(['$urlRouterProvider', '$locationProvider',
    function ($urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
    }
]);
