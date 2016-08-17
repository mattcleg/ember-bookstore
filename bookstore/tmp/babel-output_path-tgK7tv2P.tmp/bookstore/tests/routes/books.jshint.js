define('bookstore/tests/routes/books.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/books.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books.js should pass jshint.');
  });
});