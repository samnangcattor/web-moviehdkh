'use strict';

/**
 * @ngdoc function
 * @name webMoviehdkhApp.controller:GenreCtrl
 * @description
 * # GenreCtrl
 * Controller of the webMoviehdkhApp
 */
 angular.module('webMoviehdkhApp')
   .controller('GenreCtrl', [
      '$scope',
      '$stateParams',
      'Genres',
     function (
       $scope,
       $stateParams,
       Genres
     ) {
       var params;
       $scope.page = 1;

       function reloadData() {
         params = {
           id: $scope.title,
           page: $scope.page
         };
         Genres.show(params).then(function(resp) {
           $scope.movies = resp.movies;
           $scope.total = resp.total;
           $scope.currentPage = resp.current_page;
           $scope.lastPage = resp.last_page;
         });
       }

       $scope.init = function() {
         $scope.title = $stateParams.title;
         reloadData();
       };

       $scope.$watch('page', function() {
         reloadData();
       });
   }]);
