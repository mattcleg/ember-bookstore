define('bookstore/models/publisher', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    name: (0, _emberDataAttr['default'])('string'),
    discount: (0, _emberDataAttr['default'])('number'),
    published: (0, _emberDataRelationships.hasMany)('book', { async: true })
  });
});