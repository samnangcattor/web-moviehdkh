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
    'services.environments',
    'angular-loading-bar',
    'ng-token-auth'
  ])
  .config(['$compileProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider', '$authProvider', 'Environments',
    function ($compileProvider, $stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider, $authProvider, Environments) {
      cfpLoadingBarProvider.includeSpinner = false;
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $compileProvider.debugInfoEnabled(false);

      $authProvider.configure({
        apiUrl: Environments.apiUrl,
        storage: 'localStorage',
        omniauthWindowType: 'newWindow',
        validateOnPageLoad: false,
        authProviderPaths: {
          google: '/auth/google_oauth2'
        }
      });

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('year', {
          url: '/years/{title}',
          templateUrl: 'views/year.html',
          controller: 'YearCtrl',
          title: 'Year'
        })
        .state('genre', {
          url: '/genres/{title}',
          templateUrl: 'views/genre.html',
          controller: 'GenreCtrl',
          title: 'Genre'
        })
        .state('test', {
          url: '/test',
          template: '<test></test>',
          controller: 'TestCtrl'
        })
        .state('search', {
          url: '/searchs?{s}',
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl',
          params: {
            searchs: '{searchs}'
          },
          title: 'Search'
        })
        .state('auth.movie', {
          url: '/movies/{title}',
          templateUrl: 'views/movie.html',
          controller: 'MovieCtrl',
          title: '{title} - Moviehdkh'
        })
        .state('signin', {
          url: '/signin',
          templateUrl: 'views/signin.html',
          controller: 'SigninCtrl',
          params: {
            hide_google_oauth: null
          }
        })
        .state('auth', {
          abstract: true,
          template: '<ui-view/>',
          resolve: {
            auth: function($auth, $state, $location, $rootScope) {
              return $auth.validateUser().then(function() {
              }).catch(function() {
                $state.go('signin');
              });
            }
          }
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

      var afterLogin = function() {
        if (!_.isNull($scope.user.id)) {
          $state.go('main');
        }
      };

      $scope.$on('auth:login-success' , afterLogin);

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
