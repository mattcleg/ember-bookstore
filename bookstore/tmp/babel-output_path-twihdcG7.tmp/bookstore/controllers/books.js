define('bookstore/controllers/books', ['exports', 'ember'], function (exports, _ember) {
    var computed = _ember['default'].computed;
    exports['default'] = _ember['default'].Controller.extend({
        queryParams: ['limit'],
        limit: 5,

        total: computed('model.meta', function () {
            return this.get('model.meta').total;
        }),

        showAll: computed('total', 'model', function () {
            return this.get('total') > this.get('model.length');
        })

    });
});