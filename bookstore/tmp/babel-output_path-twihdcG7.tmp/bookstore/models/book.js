define('bookstore/models/book', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    price: _emberData['default'].attr('number'),
    author: _emberData['default'].belongsTo('author', { async: true, inverse: 'books' }),
    publisher: _emberData['default'].belongsTo('author', { async: true, inverse: 'published' })
  });
});