'use strict';

/**
 * @ngdoc function
 * @name chanSquaredApp.controller:ThreadCtrl
 * @description
 * # ThreadCtrl
 * Controller of the chanSquaredApp
 */
angular.module('chanSquaredApp')
  .controller('ThreadCtrl', function ($scope, $routeParams, $window, Conversations) {
    $scope.thread = Conversations.Conversations.filter(function(thread){
      var hrefCp = thread.href || '';
      hrefCp.replace("#/" + $routeParams.boardId + "/thread/", '');
      $window.console.log(hrefCp === $routeParams.threadId);
      if(hrefCp === $routeParams.threadId){
        $window.console.log(thread);
      }
      return hrefCp === $routeParams.threadId;
    })[0];
  });
