define('bookstore/routes/books', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        queryParams: {
            limit: {
                refreshModel: true
            }
        },

        model: function model() {
            return this.store.findAll('book');
        },

        actions: {
            showAll: function showAll() {
                var total = this.controllerFor('books').get('total');
                this.transitionTo({ queryParams: { limit: total } });
            },

            blurBackground: function blurBackground(blur) {
                this.controllerFor('application').set('blur', blur);
            }
        }
    });
});