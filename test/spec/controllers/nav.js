'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('chanSquaredApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should display three of my favorite boards', function () {
    expect(scope.navList.length).toBe(3);
  });
});
