'use strict';

/**
 * @ngdoc service
 * @name webMoviehdkhApp.Users
 * @description
 * # Users
 * Service in the webMoviehdkhApp.
 */

angular.module('webMoviehdkhApp')
  .service('Users', function(MoviehdkhApi) {
    return {
      newLoginUser: function() {
        return {email: "", password: ""};
      }
    }
  });
