'use strict';

/**
 * @ngdoc function
 * @name chanSquaredApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the chanSquaredApp
 */
angular.module('chanSquaredApp')
  .controller('TopicCtrl', function ($scope, Conversations) {
    $scope.conversations = Conversations.Conversations;
  });
