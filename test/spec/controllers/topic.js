'use strict';

describe('Controller: TopicCtrl', function () {

  // load the controller's module
  beforeEach(module('chanSquaredApp'));

  var TopicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopicCtrl = $controller('TopicCtrl', {
      $scope: scope
    });
  }));

  it('Should execute this test.', function(){
    expect(true).toBe(true);
  });
});
