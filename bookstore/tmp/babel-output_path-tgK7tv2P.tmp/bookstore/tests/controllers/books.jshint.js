define('bookstore/tests/controllers/books.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/books.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/books.js should pass jshint.');
  });
});