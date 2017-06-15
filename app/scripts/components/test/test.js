'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:test
 * @description
 * # test
 */
angular.module('webMoviehdkhApp')
  .component('test', {
    templateUrl: 'scripts/components/test/test.html',
    controller: 'searchCtrl'
  })
  .controller('TestCtrl', [
    function(
    ) {
      var $ctrl = this;
    }
  ]);
