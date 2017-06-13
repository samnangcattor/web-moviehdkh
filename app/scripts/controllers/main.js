'use strict';

/**
 * @ngdoc function
 * @name webMoviehdkhApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webMoviehdkhApp
 */
 angular.module('webMoviehdkhApp')
   .controller('MainCtrl', [
      'Movies',
      '$scope',
      '$q',
     function (
       Movies,
       $scope,
       $q
     ) {
      $q.all([
        Movies.newUpdate(),
        Movies.hot(),
        Movies.slide()
      ]).then(function (results) {
        $scope.newMovies = results[0];
        $scope.hotMovies = results[1];
        $scope.slideMovies = results[2];
      });
   }]);
