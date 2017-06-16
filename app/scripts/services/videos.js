'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Videos
 * @description
 * # Videos
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Videos', function(MoviehdkhApi) {
    return {
      show: function(params) {
        return MoviehdkhApi.get('/movies/videos/' + params).then(function(response) {
          return response.data;
        });
      }
    }
  });
