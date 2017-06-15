'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Relatives
 * @description
 * # Relatives
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Relatives', function(MoviehdkhApi) {
    return {
      show: function(params) {
        return MoviehdkhApi.get('/movies/relatives/' + params).then(function(response) {
          return response.data;
        });
      }
    }
  });
