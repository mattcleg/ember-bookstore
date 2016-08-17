define('bookstore/tests/routes/author.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/author.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/author.js should pass jshint.');
  });
});