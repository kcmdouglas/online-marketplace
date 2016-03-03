import Ember from 'ember';

export default Ember.Service.extend({
  cart: {},

  add(item, quantity) {
    this.get('cart')[item.id] = {item: item, quantity: quantity};
  },

  remove(item) {
    delete this.get('cart')[item];
  }
});
