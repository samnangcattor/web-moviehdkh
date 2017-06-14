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
    function(
      Searchs
    ) {
      var $ctrl = this;

      $ctrl.search = function(q) {
        Searchs.getSearch(q).then(function(response) {
          console.log(response);
        });
      };
    }
  ]);
