import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('sub-category', params.sub_category_id);
  }
});
