'use strict';

/**
 * @ngdoc function
 * @name webMoviehdkhApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the webMoviehdkhApp
 */
 angular.module('webMoviehdkhApp')
   .controller('SigninCtrl', [
      '$rootScope',
      '$scope',
      '$location',
      '$auth',
      '$state',
      'Users',
     function (
       $rootScope,
       $scope,
       $location,
       $auth,
       $state,
       Users
     ) {
       $scope.$parent.loggedin = false;
       $scope.user = Users.newLoginUser();
       var oAuth = function (provider) {
        $auth.authenticate(provider)
          .then(function (res) {
            res.active = eval(res.active);
          })
          .catch(function (res) {
            console.log('error');
            console.log(res);
          });
      };
       $scope.googleAuth = function () {
         oAuth('google');
       };
       $scope.hideGoogleOAuth = $state.params.hide_google_oauth;

       $rootScope.$on('auth:login-success', function (ev, user) {
          if (_.isNull(user.id)) {
            var content = 'You are not login';
            alert(content);
          }
        });

   }]);
