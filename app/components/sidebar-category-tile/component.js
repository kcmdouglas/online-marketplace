import Ember from 'ember';

export default Ember.Component.extend({
  showSubCategories: false,

  actions: {
    showSubCategories() {
      this.get('showSubCategories') ? this.set('showSubCategories', false) : this.set('showSubCategories', true);
    }
  }
});
