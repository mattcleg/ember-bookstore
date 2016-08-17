define('bookstore/router', ['exports', 'ember', 'bookstore/config/environment'], function (exports, _ember, _bookstoreConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _bookstoreConfigEnvironment['default'].locationType,
    rootURL: _bookstoreConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('books', { path: '/' });
    this.route('author', { path: '/author/:author_id' });
  });

  exports['default'] = Router;
});