import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      var productQuantity = this.get('productQuantity') || 1;
      this.get('shoppingCart').add(product, productQuantity);
    }
  }
});
