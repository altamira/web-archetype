'use strict';

/**
 * @ngdoc function
 * @name webArchetypeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webArchetypeApp
 */
angular.module('webArchetypeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
