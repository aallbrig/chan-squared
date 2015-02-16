'use strict';

/**
 * @ngdoc service
 * @name chanSquaredApp.Topics
 * @description
 * # Topics
 * Service in the chanSquaredApp.
 */
angular.module('chanSquaredApp')
  .service('Topics', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {'topics': [{'title':'Whatever',
                                'href' :'g/k128238fjhadfha82741294/'},
                               {'title':'Whatever',
                                'href' :'g/k128238fjhadfha82741294/'},
                               {'title':'Whatever',
                                'href' :'g/k128238fjhadfha82741294/'},
                               {'title':'Whatever',
                                'href' :'g/k128238fjhadfha82741294/'}]};
  });
