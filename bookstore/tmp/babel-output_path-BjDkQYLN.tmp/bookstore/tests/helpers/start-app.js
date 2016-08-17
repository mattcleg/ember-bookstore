define('bookstore/tests/helpers/start-app', ['exports', 'ember', 'bookstore/app', 'bookstore/config/environment'], function (exports, _ember, _bookstoreApp, _bookstoreConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _bookstoreConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _bookstoreApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});