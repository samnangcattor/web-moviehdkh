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
      perPage: '@',
      total: '<',
      currentPage: '<',
      lastPage: '<',
      page: '='
    },
    controller: 'movieListCtrl'
  })
  .controller('movieListCtrl', [

    function(

    ) {
      var $ctrl = this;

      $ctrl.nextPage = function(currentPage, lastPage) {
        if (currentPage < lastPage) {
          $ctrl.page = currentPage + 1;
        }
      };

      $ctrl.prevPage = function(currentPage) {
        if (currentPage > 1) {
          $ctrl.page = currentPage - 1;
        }
      };

      $ctrl.checkTypeUrl = function(movie) {
        if (movie.mt) {
          return "films/" + movie.slug;
        }
        return "movies/" + movie.slug;
      }
    }
  ]);
