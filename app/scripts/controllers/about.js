'use strict';

/**
 * @ngdoc function
 * @name easyFavesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the easyFavesApp
 */
angular.module('itemMirrorAngularDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
