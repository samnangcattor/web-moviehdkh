'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Movies
 * @description
 * # Movies
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Movies', function(MoviehdkhApi) {
    return {
      newUpdate: function(param) {
        return MoviehdkhApi.get('/movies?all=1').then(function(response) {
          return response.data;
        });
      },
      hot: function(param) {
        return MoviehdkhApi.get('/movies?hot=1').then(function(response) {
          return response.data;
        });
      }
    }
  });
