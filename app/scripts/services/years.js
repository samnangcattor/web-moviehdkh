'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Years
 * @description
 * # MoviehdkhApi
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Years', function(MoviehdkhApi) {
    return {
      get: function() {
        return MoviehdkhApi.get('/years').then(function(response) {
          return response.data;
        });
      }
    }
  });
