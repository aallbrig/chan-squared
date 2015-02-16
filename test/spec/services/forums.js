'use strict';

describe('Service: Forums', function () {

  // load the service's module
  beforeEach(module('chanSquaredApp'));

  // instantiate service
  var Forums;
  beforeEach(inject(function (_Forums_) {
    Forums = _Forums_;
  }));

  it('should do something', function () {
    expect(!!Forums).toBe(true);
  });

});
