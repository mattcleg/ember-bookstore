define('bookstore/tests/components/book-cover.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/book-cover.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-cover.js should pass jshint.');
  });
});