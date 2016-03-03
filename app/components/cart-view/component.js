import Ember from 'ember';

export default Ember.Component.extend({
  refresh: true,
  shoppingCart: Ember.inject.service(),
  actions: {
    removeFromCart(product) {
      console.log(product.id);
      this.get('shoppingCart').remove(product.id);
      this.set('refresh', false);
      var that = this;
      Ember.run.next(function() {
        that.set('refresh', true);
      })
    }
  }
});
