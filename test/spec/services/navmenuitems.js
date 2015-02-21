'use strict';

describe('Service: NavMenuItems', function () {

  // load the service's module
  beforeEach(module('chanSquaredApp'));

  // instantiate service
  var NavMenuItems;
  beforeEach(inject(function (_NavMenuItems_) {
    NavMenuItems = _NavMenuItems_;
  }));

  it('should do something', function () {
    expect(!!NavMenuItems).toBe(true);
  });

});
