define('bookstore/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'bookstore/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _bookstoreConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_bookstoreConfigEnvironment['default'].APP.name, _bookstoreConfigEnvironment['default'].APP.version)
  };
});