'use strict';

/**
 * @ngdoc function
 * @name webMoviehdkhApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the webMoviehdkhApp
 */
 angular.module('webMoviehdkhApp')
   .controller('SearchCtrl', [
      '$scope',
      '$stateParams',
      'Searchs',
     function (
       $scope,
       $stateParams,
       Searchs
     ) {
       $scope.init = function() {
         $scope.s = $stateParams.s;
         if ($stateParams.searchs === '{searchs}') {
           Searchs.getSearch($scope.s).then(function(response) {
             $scope.movies = response.searchs;
           });
         } else {
           $scope.movies = $stateParams.searchs;
         }
       };
   }]);
