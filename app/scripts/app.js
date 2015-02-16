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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/:boardId', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl'
      })
      .when('/:boardId/:threadId', {
        templateUrl: 'views/topic/thread.html',
        controller: 'TopicThreadCtrl'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
