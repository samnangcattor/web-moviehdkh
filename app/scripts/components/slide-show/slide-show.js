'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:slideShow
 * @description
 * # slideShow
 */
angular.module('webMoviehdkhApp')
  .component('slideShow', {
    templateUrl: 'scripts/components/slide-show/slide-show.html',
    controller: 'slideShowCtrl'
  })
  .controller('slideShowCtrl', [
    '$scope',
    'Movies',
    '$timeout',
    function(
      $scope,
      Movies,
      $timeout
    ) {
      var $ctrl = this;
      var timer;

      $ctrl.currentIndex = 0;

      $ctrl.next = function() {
        $ctrl.currentIndex < $ctrl.items.length - 1 ? $ctrl.currentIndex++ : $ctrl.currentIndex = 0;
      };

      $ctrl.prev = function() {
        $ctrl.currentIndex > 0 ? $ctrl.currentIndex-- : $ctrl.currentIndex = $ctrl.items.length - 1;
      };

      $scope.$watch('$ctrl.currentIndex', function() {
        _.forEach($ctrl.items, function(image) {
          image.visible = false; // make every image invisible
        });
        if ($ctrl.items) {
          $ctrl.items[$ctrl.currentIndex].visible = true; // make the current image visible
        }
      });

      $ctrl.init = function() {
        Movies.slide().then(function(moviesData) {
          $ctrl.items = moviesData.movies;
          $ctrl.items[0].visible = true;
        });
      };

      var sliderFunc = function() {
        timer = $timeout(function() {
          $ctrl.next();
          timer = $timeout(sliderFunc, 5000);
        }, 5000);
      };

      sliderFunc();

      $scope.$on('$destroy', function() {
        $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
      });
    }
  ]);
