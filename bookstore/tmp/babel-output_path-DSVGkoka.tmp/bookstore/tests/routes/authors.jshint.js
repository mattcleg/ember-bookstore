define('bookstore/tests/routes/authors.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/authors.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/authors.js should pass jshint.');
  });
});