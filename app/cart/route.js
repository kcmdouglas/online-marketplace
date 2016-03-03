import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
    }
  }
});
