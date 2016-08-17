define('bookstore/models/author', ['exports', 'bookstore/models/publisher', 'ember-data/relationships'], function (exports, _bookstoreModelsPublisher, _emberDataRelationships) {
  exports['default'] = _bookstoreModelsPublisher['default'].extend({
    books: (0, _emberDataRelationships.hasMany)('book', { async: true })
  });
});