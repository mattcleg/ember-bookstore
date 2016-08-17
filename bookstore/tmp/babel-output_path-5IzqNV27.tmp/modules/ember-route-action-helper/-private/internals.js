import Ember from 'ember';

var ClosureActionModule = undefined;

if ('ember-htmlbars/keywords/closure-action' in Ember.__loader.registry) {
  ClosureActionModule = Ember.__loader.require('ember-htmlbars/keywords/closure-action');
} else {
  ClosureActionModule = Ember.__loader.require('ember-routing-htmlbars/keywords/closure-action');
}

var ACTION = ClosureActionModule.ACTION;
export { ACTION };