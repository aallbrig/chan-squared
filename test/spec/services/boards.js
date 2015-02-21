'use strict';

describe('Service: Boards', function () {

  // load the service's module
  beforeEach(module('chanSquaredApp'));

  // instantiate service
  var Boards;
  beforeEach(inject(function (_Boards_) {
    Boards = _Boards_;
  }));

  it('should do something', function () {
    expect(!!Boards).toBe(true);
  });

});
