'use strict';

/**
 * @ngdoc function
 * @name chanSquaredApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chanSquaredApp
 */
angular.module('chanSquaredApp')
  .controller('MainCtrl', function ($scope, Boards) {
    $scope.boards = Boards;
  });
