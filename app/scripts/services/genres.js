'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Genres
 * @description
 * # Genres
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Genres', function(MoviehdkhApi) {
    return {
      get: function() {
        return MoviehdkhApi.get('/genres').then(function(response) {
          return response.data;
        });
      }
    }
  });
