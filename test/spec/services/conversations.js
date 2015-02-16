'use strict';

describe('Service: Conversations', function () {

  // load the service's module
  beforeEach(module('chanSquaredApp'));

  // instantiate service
  var Conversations;
  beforeEach(inject(function (_Conversations_) {
    Conversations = _Conversations_;
  }));

  it('should do something', function () {
    expect(!!Conversations).toBe(true);
  });

});
