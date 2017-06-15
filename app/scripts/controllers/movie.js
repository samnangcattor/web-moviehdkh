'use strict';

/**
 * @ngdoc function
 * @name webMoviehdkhApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the webMoviehdkhApp
 */
 angular.module('webMoviehdkhApp')
   .controller('MovieCtrl', [
      '$scope',
      '$stateParams',
      'Movies',
     function (
       $scope,
       $stateParams,
       Movies
     ) {

       $scope.init = function() {
         $scope.title = $stateParams.title;
         Movies.show($scope.title).then(function(response) {
           $scope.movie = response.movie;
           $scope.year = response.year;
           $scope.genres = response.genres;
         });
       };
   }]);
