import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        limit: {
            refreshModel: true
        }
    },

    model() {
        return this.store.findAll('book');
    },

    actions: {
        showAll() {
            const total = this.controllerFor('books').get('total');
            this.transitionTo({ queryParams: {limit: total }});
        },

        blurBackground(blur) {
            this.controllerFor('application').set('blur', blur);
        }
    }
});
