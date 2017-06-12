'use strict';

 /**
  * @ngdoc service
  * @name webMoviehdkhApp.MoviehdkhApi
  * @description
  * # MoviehdkhApi
  * Service in the webMoviehdkhApp.
  */
 angular.module('webMoviehdkhApp')
   .service('MoviehdkhApi', function ($http, Environments) {
     var apiUrl = Environments.apiUrl;
     return {
       get: function (path) {
         return $http.get(apiUrl + path);
       }
     }
   });
