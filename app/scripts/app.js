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
    'services.environments'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('year', {
          url: '/years/{title}',
          templateUrl: 'views/year.html',
          controller: 'YearCtrl'
        });
    }
  ])
  .controller('moviehdkhMaterial', [
    '$scope',
    '$state',
    '$q',
    'Years',
    'Genres',
    function (
      $scope,
      $state,
      $q,
      Years,
      Genres
    ) {
      $scope.menuGenre = [];

      $scope.callByMenu = function(action) {
        action();
      };

      $scope.sideNavMenuClick = function(menuId, target, attrs) {
        $state.go(target, attrs || {});
      };


      $q.all([
        Years.get(),
        Genres.get()
      ]).then(function (results) {
        $scope.menuYear = [];
        $scope.menuGenre = [];
        angular.forEach(results[0], function(year) {
          $scope.menuYear.push({
            action: function() { $scope.sideNavMenuClick('left', 'year', {id: year.id, title: year.number}); },
            title: year.number,
            icon: 'fa fa-list'
          });
        });
        angular.forEach(results[1], function(genre) {
          $scope.menuGenre.push({
            action: function() { $scope.sideNavMenuClick('left', 'genre', {id: genre.id, title: genre.name}); },
            title: genre.name,
            icon: 'fa fa-list'
          });
        });
      });
    }
  ]);
