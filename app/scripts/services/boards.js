'use strict';

/**
 * @ngdoc service
 * @name chanSquaredApp.Boards
 * @description
 * # Boards
 * Service in the chanSquaredApp.
 */
angular.module('chanSquaredApp')
  .service('Boards', function () {
    return [{'title': 'Technology',
             'href' : '#/g'},
            {'title': 'Video Games',
             'href': '#/v'},
            {'title': '\'Merica',
             'href': '#/pol'}];
  });
