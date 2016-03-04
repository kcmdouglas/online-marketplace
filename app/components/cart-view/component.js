import Ember from 'ember';

export default Ember.Component.extend({
  refresh: true,
  shoppingCart: Ember.inject.service(),
  actions: {
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
      this.set('refresh', false);
      var that = this;
      Ember.run.next(function() {
        that.set('refresh', true);
      })
    }
  }
});
