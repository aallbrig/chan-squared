'use strict';

/**
 * @ngdoc function
 * @name chanSquaredApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the chanSquaredApp
 */
angular.module('chanSquaredApp')
  .controller('NavCtrl', function ($scope, $window, $location, NavMenuItems) {
    $scope.navItems = NavMenuItems.pages;
    $scope.boards  = NavMenuItems.boards;

    $scope.getActive = function(){
      $scope.navItems.filter(function(item){
        item.class = '';
        return '#' + $location.$$path === item.href;
      }).forEach(function(item){
        item.class = 'active';
      });
    };
  });
