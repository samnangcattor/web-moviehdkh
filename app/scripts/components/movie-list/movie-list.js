'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:movieList
 * @description
 * # movieList
 */
angular.module('webMoviehdkhApp')
  .component('movieList', {
    templateUrl: 'scripts/components/movie-list/movie-list.html',
    bindings: {
      movies: '<',
      title: '@',
      perPage: '@'
    },
    controller: 'movieListCtrl'
  })
  .controller('movieListCtrl', [

    function(

    ) {
      var $ctrl = this;
    }
  ]);
