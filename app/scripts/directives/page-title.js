'use strict';

/**
 * @ngdoc directive
 * @name webMoviehdkhApp.directive:pageTitle
 * @description
 * # pageTitle
 */
angular.module('webMoviehdkhApp')
  .directive('pageTitle', function($stateParams, $transitions) {
    return {
      link: function(scope, element) {
        var listener = function(trans) {
          var pageTitle = '';
          var title = trans.originalTransition().to().title;
          if ($stateParams.title) {
            pageTitle = $stateParams.title + ' - '+ title;
            element.text(pageTitle);
          } else {
            pageTitle = 'Moviehdkh - Movie Storage';
            element.text(pageTitle);
          }
        };

        $transitions.onSuccess({}, listener);
      }
    };
  });
