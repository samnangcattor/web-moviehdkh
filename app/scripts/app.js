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
  .config(['$httpProvider', '$compileProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider', '$authProvider', 'Environments', '$sceDelegateProvider',
    function ($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider, $authProvider, Environments, $sceDelegateProvider) {
      cfpLoadingBarProvider.includeSpinner = false;
      var interceptor = ["$q", "$injector", function ($q, $injector) {
        return {
          request: function (config) {
            var $http = $injector.get("$http");
            var uniqueRequestOptionName = "unique";
            var requestIdOptionName = "requestId";

            function checkForDuplicates(config) {
              return !!config[uniqueRequestOptionName];
            }

            function checkIfDuplicated(config) {
              var duplicated = $http.pendingRequests.filter(function (pendingConfig) {
                return pendingConfig[requestIdOptionName] && pendingConfig[requestIdOptionName] === config[requestIdOptionName];
              });
              return duplicated.length > 0;
            }

            function buildRejectedRequestPromise(config) {
              var dfd = $q.defer();
              // var response = {data: {}, headers: {}, status: 499, config: config};
              // dfd.reject(response);

              return dfd.promise;
            }

            if (checkForDuplicates(config) && checkIfDuplicated(config)) {
              return buildRejectedRequestPromise(config);
            }

            return config || $q.when(config);
          }
        };
      }];

      $urlRouterProvider.otherwise('/');
      $compileProvider.debugInfoEnabled(false);
      $httpProvider.interceptors.push(interceptor);
      $httpProvider.useApplyAsync(true);
      $httpProvider.useXDomain = true;
      $locationProvider.html5Mode(true);

      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'https://youtube.googleapis.com/**',
        'https://drive.google.com/**'
      ]);

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
          controller: 'MainCtrl',
          title: 'Moviehd - Movie Storage'
        })
        .state('year', {
          url: '/years/{title}',
          templateUrl: 'views/year.html',
          controller: 'YearCtrl',
          title: 'Year - Moviehdkh'
        })
        .state('genre', {
          url: '/genres/{title}',
          templateUrl: 'views/genre.html',
          controller: 'GenreCtrl',
          title: 'Genre - Moviehdkh'
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
            searchs: '{searchs} - Moviehdkh'
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
