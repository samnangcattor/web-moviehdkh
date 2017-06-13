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
        .state('yearList', {
          url: '/year-list',
          template: '<year-list></year-list>',
          title: 'Year List'
        });
    }
  ])
  .controller('moviehdkhMaterial', [
    '$scope',
    '$state',
    function (
      $scope,
      $state
    ) {
      $scope.callByMenu = function(action) {
        action();
      };

      $scope.sideNavMenuClick = function(menuId, target, attrs) {
        $state.go(target, attrs || {});
      };

      $scope.menuYear = [
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: '2018',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: '2017',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: '2016',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: '2015',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: '2014',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'yearList'); },
          title: 'See all',
          icon: 'fa fa-list'
        }
      ];

      $scope.menuGenre = [
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: '18+',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: 'Actions',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: 'Adenture',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'year'); },
          title: 'Animation',
          icon: 'fa fa-list'
        },
        {
          action: function() { $scope.sideNavMenuClick('left', 'yearList'); },
          title: 'See All',
          icon: 'fa fa-list'
        }
      ];
    }
  ]);
