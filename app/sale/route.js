import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('sale', params.sale_id)
  }
});
