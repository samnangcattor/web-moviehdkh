'use strict';

/**
 * @ngdoc function
 * @name webMoviehdkhApp.controller:YearCtrl
 * @description
 * # YearCtrl
 * Controller of the webMoviehdkhApp
 */
 angular.module('webMoviehdkhApp')
   .controller('YearCtrl', [
      '$scope',
      '$stateParams',
      'Years',
     function (
       $scope,
       $stateParams,
       Years
     ) {
       var params;
       $scope.page = 1;

       function reloadData() {
         params = {
           id: $scope.title,
           page: $scope.page
         };
         Years.show(params).then(function(resp) {
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
