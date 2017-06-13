'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:yearList
 * @description
 * # yearList
 */
angular.module('webMoviehdkhApp')
  .component('yearList', {
    templateUrl: 'scripts/components/year-list/year-list.html',
    controller: 'yearListCtrl'
  })
  .controller('yearListCtrl', [
    'Years',
    function(
      Years
    ) {
      var $ctrl = this;
      $ctrl.years = [];

      Years.get().then(function(years) {
        $ctrl.years = years;
      });
    }
  ]);
