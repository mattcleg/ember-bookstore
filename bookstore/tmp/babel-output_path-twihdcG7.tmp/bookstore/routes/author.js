define('bookstore/routes/author', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('author', params.author_id);
        }
    });
});