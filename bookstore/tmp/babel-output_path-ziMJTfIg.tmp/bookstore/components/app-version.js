define('bookstore/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'bookstore/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _bookstoreConfigEnvironment) {

  var name = _bookstoreConfigEnvironment['default'].APP.name;
  var version = _bookstoreConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});