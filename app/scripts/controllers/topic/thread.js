'use strict';

/**
 * @ngdoc function
 * @name chanSquaredApp.controller:TopicThreadCtrl
 * @description
 * # TopicThreadCtrl
 * Controller of the chanSquaredApp
 */
angular.module('chanSquaredApp')
  .controller('TopicThreadCtrl', function ($scope, $routeParams) {
    window.console.log($routeParams);
    $scope.routeParams = $routeParams;
  });
