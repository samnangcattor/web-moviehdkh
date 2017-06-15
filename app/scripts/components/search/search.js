'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:search
 * @description
 * # search
 */
angular.module('webMoviehdkhApp')
  .component('search', {
    templateUrl: 'scripts/components/search/search.html',
    bindings: {
      title: '<'
    },
    controller: 'searchCtrl'
  })
  .controller('searchCtrl', [
      'Searchs',
      '$state',
    function(
      Searchs,
      $state
    ) {
      var $ctrl = this;

      $ctrl.search = function(q) {
        Searchs.getSearch(q).then(function(response) {
          $state.go('search', {
            s: response.q,
            searchs: response.searchs
          });
        });
      };
    }
  ]);
