'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Details
 * @description
 * # Details
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Details', function(MoviehdkhApi) {
    return {
      show: function(params) {
        return MoviehdkhApi.get('/movies/details/' + params).then(function(response) {
          return response.data;
        });
      }
    }
  });
