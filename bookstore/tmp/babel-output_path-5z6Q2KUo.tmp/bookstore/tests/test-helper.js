define('bookstore/tests/test-helper', ['exports', 'bookstore/tests/helpers/resolver', 'ember-qunit'], function (exports, _bookstoreTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_bookstoreTestsHelpersResolver['default']);
});