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
      $scope.page = 1;

      $q.all([
        Movies.newUpdate($scope.page),
        Movies.hot()
      ]).then(function (results) {
        var moviesData = results[0];
        $scope.newMovies = moviesData.movies;
        $scope.total = moviesData.total;
        $scope.currentPage = moviesData.current_page;
        $scope.lastPage = moviesData.last_page;
        $scope.hotMovies = results[1].movies;
      });

      $scope.$watch('page', function() {
        Movies.newUpdate($scope.page).then(function(moviesData) {
          $scope.newMovies = moviesData.movies;
          $scope.total = moviesData.total;
          $scope.currentPage = moviesData.current_page;
          $scope.lastPage = moviesData.last_page;
        });
      });
   }]);
