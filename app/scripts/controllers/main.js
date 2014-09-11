'use strict';

/**
 * @ngdoc function
 * @name webArchetypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webArchetypeApp
 */
angular.module('webArchetypeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
