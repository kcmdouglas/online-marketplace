import Ember from 'ember';

export default Ember.Service.extend({
  cartLength: 0,

  update(length) {
    this.set('cartLength', length);
  }
});
