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
        return MoviehdkhApi.get('/movies?q=update&page=' + param).then(function(response) {
          return response.data;
        });
      },
      hot: function(param) {
        return MoviehdkhApi.get('/movies?q=hot').then(function(response) {
          return response.data;
        });
      },
      slide: function(param) {
        return MoviehdkhApi.get('/movies?q=slide').then(function(response) {
          return response.data;
        });
      }
    }
  });
