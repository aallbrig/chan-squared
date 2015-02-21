'use strict';

/**
 * @ngdoc service
 * @name chanSquaredApp.NavMenuItems
 * @description
 * # NavMenuItems
 * Service in the chanSquaredApp.
 */
angular.module('chanSquaredApp')
  .service('NavMenuItems', function (Boards) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var boards = Boards;
    var pages = [{"title":"Home",
                   "href":"#/",
                   "class":""},
                  {"title":"About",
                   "href":"#/about",
                   "class":""}];

    this.boards = boards;
    this.pages = pages;

    return this;
  });
