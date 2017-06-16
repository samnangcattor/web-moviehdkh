'use strict';

/**
 * @ngdoc component
 * @name webMoviehdkhApp.component:videoDetail
 * @description
 * # videoDetail
 */
angular.module('webMoviehdkhApp')
  .component('videoDetail', {
    templateUrl: 'scripts/components/video-detail/video-detail.html',
    controller: 'videoDetailCtrl'
  })
  .controller('videoDetailCtrl', [
    'Videos',
    '$stateParams',
    function(
      Videos,
      $stateParams
    ) {
      var $ctrl = this;
      var YOUTUBE = "https://drive.google.com/file/d/";

      $ctrl.init = function() {
        $ctrl.title = $stateParams.title;
        Videos.show($ctrl.title).then(function(response) {
          $ctrl.video = response;
          $ctrl.linkVideo = YOUTUBE + $ctrl.video.file + '/preview';
        });
      };
    }
  ]);
