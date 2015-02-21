'use strict';

/**
 * @ngdoc overview
 * @name chanSquaredApp
 * @description
 * # chanSquaredApp
 *
 * Main module of the application.
 */
angular
  .module('chanSquaredApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/pages/about.html'
      })
      .when('/:boardId', {
        templateUrl: 'views/pages/board.html',
        controller: 'TopicCtrl'
      })
      .when('/:boardId/thread/:threadId', {
        templateUrl: 'views/pages/thread.html',
        controller: 'ThreadCtrl'
      })
      .when('/404', {
        templateUrl: 'views/pages/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
