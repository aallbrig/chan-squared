'use strict';

describe('Service: Topics', function () {

  // load the service's module
  beforeEach(module('chanSquaredApp'));

  // instantiate service
  var Topics;
  beforeEach(inject(function (_Topics_) {
    Topics = _Topics_;
  }));

  it('should do something', function () {
    expect(!!Topics).toBe(true);
  });

});
