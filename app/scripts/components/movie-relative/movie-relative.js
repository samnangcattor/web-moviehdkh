'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:movieRelative
 * @description
 * # movieRelative
 */
angular.module('webMoviehdkhApp')
  .component('movieRelative', {
    templateUrl: 'scripts/components/movie-relative/movie-relative.html',
    controller: 'movieRelativeCtrl'
  })
  .controller('movieRelativeCtrl', [
    'Relatives',
    '$stateParams',
    function(
      Relatives,
      $stateParams
    ) {
      var $ctrl = this;

      $ctrl.init = function() {
        Relatives.show($stateParams.title).then(function(response) {
          $ctrl.relatives = response;
        });
      };
    }
  ]);
