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
      'Years',
     function (
       Years
     ) {
       Years.get().then(function(year)  {
         console.log(year);
       });
   }]);
