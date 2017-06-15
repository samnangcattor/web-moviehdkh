'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:movieDetail
 * @description
 * # movieDetail
 */
angular.module('webMoviehdkhApp')
  .component('movieDetail', {
    templateUrl: 'scripts/components/movie-detail/movie-detail.html',
    bindings: {
      description: '<',
      poster: '<',
      year: '<',
      genres: '<'
    },
    controller: 'movieDetailCtrl'
  })
  .controller('movieDetailCtrl', [
    'Details',
    '$stateParams',
    function(
      Details,
      $stateParams
    ) {
      var $ctrl = this;

      String.prototype.trunc = String.prototype.trunc ||
      function(n){
        return (this.length > n) ? this.substr(0, n-1) + '&hellip;' : this;
      };


      $ctrl.init = function() {
        $ctrl.title = $stateParams.title;
        Details.show($ctrl.title).then(function(response) {
          $ctrl.detail = response;
        });
      };
    }
  ]);
