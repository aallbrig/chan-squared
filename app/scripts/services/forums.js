'use strict';

/**
 * @ngdoc service
 * @name chanSquaredApp.Forums
 * @description
 * # Forums
 * Service in the chanSquaredApp.
 */
angular.module('chanSquaredApp')
  .service('Forums', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // This represents JSON that will be consumed later
    return {"Forums": [{"title": "Technology",
                        "route" : "g/"},
                       {"title": "Video Games",
                        "route": "v/"},
                       {"title": "\'Merica",
                        "route": "pol/"}]};
  });
