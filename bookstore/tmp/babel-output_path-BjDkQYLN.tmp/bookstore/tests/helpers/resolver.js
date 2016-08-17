define('bookstore/tests/helpers/resolver', ['exports', 'bookstore/resolver', 'bookstore/config/environment'], function (exports, _bookstoreResolver, _bookstoreConfigEnvironment) {

  var resolver = _bookstoreResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _bookstoreConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bookstoreConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});