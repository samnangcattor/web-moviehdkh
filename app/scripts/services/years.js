'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Years
 * @description
 * # Years
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Years', function(MoviehdkhApi) {
    return {
      get: function() {
        return MoviehdkhApi.get('/years').then(function(response) {
          return response.data;
        });
      },
      show: function(params) {
        return MoviehdkhApi.get('/years/' + params.id + '?page=' + params.page ).then(function(response) {
          return response.data;
        });
      }
    }
  });
