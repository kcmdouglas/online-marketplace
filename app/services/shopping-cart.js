import Ember from 'ember';

export default Ember.Service.extend({
  cart: [],

  add(item) {
    this.get('cart').pushObject(item);
  },

  remove(item) {
    this.get('cart').removeObject(item);
  }
});
