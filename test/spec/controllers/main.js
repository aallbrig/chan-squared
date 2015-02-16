'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('chanSquaredApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should display three of my favorite boards', function () {
    // Three boards from 4chan I like.
    expect(scope.forums.length).toBe(3);
  });
});
