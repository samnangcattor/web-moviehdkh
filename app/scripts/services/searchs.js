'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Searchs
 * @description
 * # Searchs
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Searchs', function(MoviehdkhApi) {
    return {
      getSearch: function(params) {
        return MoviehdkhApi.get('/searchs?q=' + params).then(function(response) {
          return response.data;
        });
      },
    }
  });
