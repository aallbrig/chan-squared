'use strict';

/**
 * @ngdoc function
 * @name chanSquaredApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the chanSquaredApp
 */
angular.module('chanSquaredApp')
  .controller('NavCtrl', function ($scope) {
    $scope.navList = [{'title': 'Technology',
                       'route': null,
                       'class': 'active',
                       'href' : 'g/'},
                      {'title': 'Video Games',
                       'href': 'v/'},
                      {'title': '\'Merica',
                       'href': 'pol/'}];
  });
