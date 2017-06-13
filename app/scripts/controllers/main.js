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
        Movies.hot()
      ]).then(function (results) {
        $scope.newMovies = results[0];
        $scope.hotMovies = results[1];
      });
   }]);
