'use strict';

describe('Controller: TopicThreadCtrl', function () {

  // load the controller's module
  beforeEach(module('chanSquaredApp'));

  var TopicThreadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopicThreadCtrl = $controller('TopicThreadCtrl', {
      $scope: scope
    });
  }));

});
