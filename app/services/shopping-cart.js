import Ember from 'ember';

export default Ember.Service.extend({
  cartLength: Ember.inject.service(),
  cart: [],

  add(item, quantity) {
    var purchase = {item: item, quantity: quantity};
    this.get('cart').addObject(purchase);
    this.get('cartLength').update(this.get('cartLength').get('cartLength') + 1)
  },

  remove(item) {
    var item = item;
    var deletedItem = $.grep(this.get('cart'), function(e) {
      return e.item.get('name') == item.get('name');
    });
    delete this.get('cart')[this.get('cart').indexOf(deletedItem[0])];
    this.get('cart').shift();
    this.get('cartLength').update(this.get('cartLength').get('cartLength') - 1)
  }
});
