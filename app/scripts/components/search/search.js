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
      search: '<',
    },
    controller: 'searchCtrl'
  })
  .controller('searchCtrl', [

    function(

    ) {
      var $ctrl = this;
    }
  ]);
